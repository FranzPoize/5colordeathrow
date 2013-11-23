Crafty.c("MoveTo", 
{
	_bClicking: false, 
	_fSpeed: 0.7, 
	_fFriction: 0.9,
	
	init: function ()
	{
		this.requires("Mouse");
		this.requires("Crafty.math.Vector2D");
		this.oldDirection = { x: 0, y: 0 }
		
		this._vPosition = new Crafty.math.Vector2D(0, 0);
		this._vMousePosition = new Crafty.math.Vector2D(0, 0);
		this._vVelocity = new Crafty.math.Vector2D(0, 0);
		
		Crafty.addEvent(this, Crafty.stage.elem, "mousedown", this._onmousedown);
		Crafty.addEvent(this, Crafty.stage.elem, "mouseup", this._onmouseup);
		Crafty.addEvent(this, Crafty.stage.elem, "mousemove", this._onmousemove);
		
		this.bind("EnterFrame", this._enterFrame);
	},
	
	_onmousedown: function (e)
	{
		this._bClicking = true;
		this.updateTarget( new Crafty.math.Vector2D( e.realX, e.realY ) );
	},
	
	_onmouseup: function (e)
	{
		this._bClicking = false;
	},
	
	_onmousemove: function (e)
	{
		if( this._bClicking )
			this.updateTarget( new Crafty.math.Vector2D( e.realX, e.realY ) );
	},
	
	_enterFrame: function ()
	{
		if (this.disableControls || this.disregardMouseInput )
		{
			return;
		}
		
		if( this._bClicking )
			this.updateVelocity();
		
		this.friction();
		
		this.x += this._vVelocity.x * this._fSpeed;
		this.y += this._vVelocity.y * this._fSpeed;
		
		this._vPosition.x = this.x;
		this._vPosition.y = this.y;
		
		if( this._vPosition.distanceSq( this._vMousePosition ) < 5 )
		{
			this._vVelocity.x = this._vVelocity.y = 0;
			
			this._vPosition.x = this.x = this._vMousePosition.x;
			this._vPosition.y = this.y = this._vMousePosition.y;
		}
		
		/*
		// target (almost) reached - jump the last part.
		// We could be more fancy (circular check instead of square), but don't want to pay the sqrt penalty each frame.
		if (Math.abs(this._vTarget.x - this.x) < this._fSpeed && Math.abs(this._vTarget.y - this.y) < this._fSpeed)
		{
			var prev_pos =
			{
				x: this.x,
				y: this.y
			};
			this.x = this._vTarget.x;
			this.y = this._vTarget.y;

			// this._stopMoving();
			
			this.trigger('Moved', prev_pos);
			this.trigger('NewDirection', { x: 0, y: 0 });
			return;
		};
		
		// Pixels to move are calculated from location and target every frame to handle the case when something else (IE, collision detection logic) changes our position.
		// Some cleaver optimization could probably eliminate the sqrt cost...
		var dx = this._vTarget.x - this.x, dy = this._vTarget.y - this.y, oldX = this.x, oldY = this.y,
		movX = (dx * this._fSpeed) / (Math.sqrt(dx * dx + dy * dy)),
		movY = (dy * this._fSpeed) / (Math.sqrt(dx * dx + dy * dy));
		
		// Triggered when direction changes - either because of a mouse click, or something external
		if (Math.abs(movX - this.oldDirection.x) > 0.1 || Math.abs(movY - this.oldDirection.y) > 0.1)
		{
			this.trigger("NewDirection", { x: movX, y: movY })
		}
		this.oldDirection = { x: movX, y: movY };
		
		// Moved triggered twice to allow for better collision logic (like moving along diagonal walls)
		this.x += movX;
		this.trigger('Moved', { x: oldX, y: this.y });
		this.y += movY;
		this.trigger('Moved', { x: this.x, y: oldY });*/
	},
	
	moveTo: function (speed)
	{
		this._fSpeed = speed;
		return this;
	},
	
	updateTarget: function ( vMousePosition )
	{
		this._vMousePosition.x = vMousePosition.x - this.w * 0.5;
		this._vMousePosition.y = vMousePosition.y - this.h * 0.5;
	},
	
	updateVelocity: function()
	{
		var vOffset = new Crafty.math.Vector2D( this._vMousePosition );
		vOffset.subtract( this._vPosition ).normalize();
		
		this._vVelocity.x += vOffset.x;
		this._vVelocity.y += vOffset.y;
		
		// Friction
	},
	
	friction: function()
	{
		this._vVelocity.x *= this._fFriction;
		this._vVelocity.y *= this._fFriction;
		
		if( this._vVelocity.magnitudeSq() < 0.1 )
			this._vVelocity.x = this._vVelocity.y = 0;
	}
});
