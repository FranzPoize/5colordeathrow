Crafty.c("MoveTo", 
{
	_fSpeed: 0.7, 
	_fMaxSpeed: 20, 
	_fFriction: 0.9, 
	_nDashFramesDelay: 10, 
	
	_nCurrentFrame: -1, 
	_nFrameClick: -1337, 
	_bClicking: false, 
	
	
	init: function ()
	{
		this.requires("Time");
		this.requires("Mouse");
		this.canMove = true
		
		this._vPosition = new Crafty.math.Vector2D(0, 0);
		this._vMousePosition = new Crafty.math.Vector2D(0, 0);
		this._vVelocity = new Crafty.math.Vector2D(0, 0);
		
		Crafty.addEvent(this, Crafty.stage.elem, "mousedown", this._onmousedown);
		Crafty.addEvent(this, Crafty.stage.elem, "mouseup", this._onmouseup);
		Crafty.addEvent(this, Crafty.stage.elem, "mousemove", this._onmousemove);
		
		this.bind("EnterFrame", this._update);
	},
	
	_update: function ( frame )
	{
		this._nCurrentFrame = frame.frame;
		
		if (this.disableControls || this.disregardMouseInput)
			return;
		
		if( this._bClicking )
			this._accelerate();
		
		this._friction();
		this._move();
		
		if( this._vPosition.distanceSq( this._vMousePosition ) < 5 )
		{
			this._vVelocity.x = this._vVelocity.y = 0;
			
			this._vPosition.x = this.x = this._vMousePosition.x;
			this._vPosition.y = this.y = this._vMousePosition.y;
		}
	},
	
	_move: function()
	{
		this.x += this._vVelocity.x * this._fSpeed;
		this.y += this._vVelocity.y * this._fSpeed;
		
		this._vPosition.x = this.x;
		this._vPosition.y = this.y;
	},
	
	_accelerate: function()
	{
		var vOffset = new Crafty.math.Vector2D( this._vMousePosition );
		vOffset.subtract( this._vPosition ).normalize();
		
		this._vVelocity.x += vOffset.x;
		this._vVelocity.y += vOffset.y;
	},
	
	_friction: function()
	{
		this._vVelocity.x *= this._fFriction;
		this._vVelocity.y *= this._fFriction;
		
		if( this._vVelocity.magnitudeSq() < 0.1 )
			this._vVelocity.x = this._vVelocity.y = 0;
	},
	
	_onmousedown: function(e)
	{
		if (!this.canMove) {
			return
		}
		this._bClicking = true;
		this._setTarget( new Crafty.math.Vector2D( e.realX, e.realY ) );
		
		if( this._nFrameClick > this._nCurrentFrame - this._nDashFramesDelay )
		{
			var vOffset = new Crafty.math.Vector2D( this._vMousePosition );
			vOffset.subtract( this._vPosition ).normalize();
			
			this._vVelocity.x = vOffset.x * this._fMaxSpeed;
			this._vVelocity.y = vOffset.y * this._fMaxSpeed;
		}
		
		this._nFrameClick = this._nCurrentFrame;
	},
	
	_onmouseup: function (e)
	{
		this._bClicking = false;
	},
	
	_onmousemove: function (e)
	{
		if( this._bClicking )
			this._setTarget( new Crafty.math.Vector2D( e.realX, e.realY ) );
	},
	
	_setTarget: function ( vMousePosition )
	{
		this._vMousePosition.x = vMousePosition.x - this.w * 0.5;
		this._vMousePosition.y = vMousePosition.y - this.h * 0.5;
	},
	
	moveTo: function (speed)
	{
		this._fSpeed = speed;
		return this;
	}
});
