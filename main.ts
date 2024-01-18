namespace SpriteKind {
    export const None = SpriteKind.create()
    export const help = SpriteKind.create()
    export const exit = SpriteKind.create()
}
function collideCorners (sprite: Sprite, dir: number) {
    if (sprite.tileKindAt(TileDirection.Center, assets.tile`leftdown`)) {
        if (dir == 0) {
            changeDir(sprite, 3)
        } else if (dir == 1) {
            changeDir(sprite, 2)
        }
    } else if (sprite.tileKindAt(TileDirection.Center, assets.tile`downright`)) {
        if (dir == 1) {
            changeDir(sprite, 0)
        } else if (dir == 2) {
            changeDir(sprite, 3)
        }
    } else if (sprite.tileKindAt(TileDirection.Center, assets.tile`upright`)) {
        if (dir == 2) {
            changeDir(sprite, 1)
        } else if (dir == 3) {
            changeDir(sprite, 0)
        }
    } else if (sprite.tileKindAt(TileDirection.Center, assets.tile`upleft`)) {
        if (dir == 0) {
            changeDir(sprite, 1)
        } else if (dir == 3) {
            changeDir(sprite, 2)
        }
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    player_next_turn = 1
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (boost_timer <= 0) {
        music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.InBackground)
        boost_timer = 16
        player_speed = 6
    }
})
function handleMove (sprite: Sprite, dir: number, speed: number) {
    if (dir == 0) {
        sprite.x += speed
    } else if (dir == 1) {
        sprite.y += 0 - speed
    } else if (dir == 2) {
        sprite.x += 0 - speed
    } else if (dir == 3) {
        sprite.y += speed
    }
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    player_next_turn = 2
})
function spawnGem (gem: Sprite) {
    gem.startEffect(effects.fountain, 200)
    animation.runImageAnimation(
    gem,
    assets.animation`gem`,
    100,
    true
    )
    if (Math.percentChance(50)) {
        tiles.placeOnRandomTile(gem, assets.tile`leftright`)
    } else {
        tiles.placeOnRandomTile(gem, assets.tile`updown`)
    }
    gem_spawner = 150
}
function handleInvulnerable () {
    if (invulnerable > 0) {
        invulnerable += -1
    }
}
info.onCountdownEnd(function () {
    game.setGameOverEffect(false, effects.splatter)
    game.setGameOverPlayable(false, music.melodyPlayable(music.powerDown), false)
    game.setGameOverMessage(false, "RAN OUT OF FUEL")
    game.setGameOverScoringType(game.ScoringType.HighScore)
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    gem_spawner = 5
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    player_next_turn = 0
})
function changeDir (sprite: Sprite, dir: number) {
    tiles.placeOnTile(sprite, sprite.tilemapLocation())
    if (sprite.kind() == SpriteKind.Player) {
        if (sprite.kind() == SpriteKind.Player) {
            if (player_speed > 1 && boost_timer > 0) {
                boost_timer = boost_timer + 30
                player_speed = 0.5
                music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.InBackground)
                scene.cameraShake(4, 200)
            }
        }
        player_dir = dir
        player_dir_change_location = player_car.tilemapLocation()
        if (dir == 0) {
            animation.runImageAnimation(
            sprite,
            assets.animation`bluecar_0`,
            50,
            true
            )
        } else if (dir == 1) {
            animation.runImageAnimation(
            sprite,
            assets.animation`bluecar_4`,
            50,
            true
            )
        } else if (dir == 2) {
            animation.runImageAnimation(
            sprite,
            assets.animation`bluecar_5`,
            50,
            true
            )
        } else if (dir == 3) {
            animation.runImageAnimation(
            sprite,
            assets.animation`bluecar_6`,
            50,
            true
            )
        }
    } else {
        police_dir = dir
        police_next_turn = randint(0, 3)
        police_dir_change_location = police_car.tilemapLocation()
        if (dir == 0) {
            animation.runImageAnimation(
            sprite,
            assets.animation`bluecar_1`,
            50,
            true
            )
        } else if (dir == 1) {
            animation.runImageAnimation(
            sprite,
            assets.animation`bluecar_2`,
            50,
            true
            )
        } else if (dir == 2) {
            animation.runImageAnimation(
            sprite,
            assets.animation`bluecar_3`,
            50,
            true
            )
        } else if (dir == 3) {
            animation.runImageAnimation(
            sprite,
            assets.animation`bluecar_7`,
            100,
            true
            )
        }
    }
}
function collideIntersections (sprite: Sprite, next_turn: number, dir: number) {
    if (sprite.tileKindAt(TileDirection.Center, assets.tile`intersection`)) {
        if (next_turn != -1 && next_turn != dir && custom.diff(dir, next_turn, 4) == 1) {
            turn(sprite, next_turn)
        }
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.help, function (sprite, otherSprite) {
    music.play(music.melodyPlayable(music.jumpUp), music.PlaybackMode.InBackground)
    sprites.destroy(otherSprite)
    game.showLongText("- Steer with arrow keys\\n- Boost with (A)\\n- Collect gems\\n- Reach the exit before the time runs out\\n- And don't get caught by the police!", DialogLayout.Full)
})
function turn (sprite: Sprite, dir: number) {
    changeDir(sprite, dir)
    setNextTurnFor(sprite, -1)
}
function handleBoost (sprite: Sprite) {
    if (sprite.kind() == SpriteKind.Player) {
        if (boost_timer > 0) {
            boost_timer += -1
            if (boost_timer <= 0) {
                player_speed = 2
            }
        }
    } else {
    	
    }
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    player_next_turn = 3
})
info.onLifeZero(function () {
    game.setGameOverEffect(false, effects.splatter)
    game.setGameOverPlayable(false, music.melodyPlayable(music.powerDown), false)
    game.setGameOverMessage(false, "BUSTED")
    game.setGameOverScoringType(game.ScoringType.HighScore)
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    player_car.sayText("$$$", 1000, false)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
    info.changeScoreBy(10)
    sprites.destroy(otherSprite)
    sprite.startEffect(effects.bubbles, 200)
})
function handleGems () {
    if (sprites.allOfKind(SpriteKind.Food).length < 3 && gem_spawner > 0) {
        gem_spawner += -1
        if (gem_spawner <= 0) {
            spawnGem(sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Food))
        }
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.exit, function (sprite, otherSprite) {
    game.setGameOverEffect(true, effects.confetti)
    game.setGameOverPlayable(true, music.melodyPlayable(music.powerUp), false)
    game.setGameOverMessage(true, "YOU GOT AWAY")
    game.setGameOverScoringType(game.ScoringType.HighScore)
    game.gameOver(true)
})
function collideTsections (sprite: Sprite, next_turn: number, dir: number) {
    if (sprite.tileKindAt(TileDirection.Center, assets.tile`notup`)) {
        if ((dir == 0 || dir == 2) && next_turn == 3) {
            turn(sprite, next_turn)
        } else if (dir == 1 && next_turn == 2) {
            turn(sprite, next_turn)
        } else if (dir == 1) {
            changeDir(sprite, 0)
        }
    } else if (sprite.tileKindAt(TileDirection.Center, assets.tile`notleft`)) {
        if ((dir == 1 || dir == 3) && next_turn == 0) {
            turn(sprite, next_turn)
        } else if (dir == 2 && next_turn == 3) {
            turn(sprite, next_turn)
        } else if (dir == 2) {
            changeDir(sprite, 1)
        }
    } else if (sprite.tileKindAt(TileDirection.Center, assets.tile`notdown`)) {
        if ((dir == 0 || dir == 2) && next_turn == 1) {
            turn(sprite, next_turn)
        } else if (dir == 3 && next_turn == 0) {
            turn(sprite, next_turn)
        } else if (dir == 3) {
            changeDir(sprite, 2)
        }
    } else if (sprite.tileKindAt(TileDirection.Center, assets.tile`notright`)) {
        if ((dir == 1 || dir == 3) && next_turn == 2) {
            turn(sprite, next_turn)
        } else if (dir == 0 && next_turn == 1) {
            turn(sprite, next_turn)
        } else if (dir == 0) {
            changeDir(sprite, 3)
        }
    }
}
function setNextTurnFor (sprite: Sprite, next_turn: number) {
    if (sprite.kind() == SpriteKind.Player) {
        player_next_turn = next_turn
    } else {
        police_next_turn = next_turn
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (invulnerable <= 0) {
        info.changeLifeBy(-1)
        sprite.startEffect(effects.hearts, 200)
        scene.cameraShake(6, 500)
        if (info.life() > 0) {
            music.play(music.melodyPlayable(music.siren), music.PlaybackMode.InBackground)
        }
        boost_timer = 60
        player_speed = 0.2
        invulnerable = 60
    }
})
let invulnerable = 0
let police_dir_change_location: tiles.Location = null
let police_next_turn = 0
let police_dir = 0
let gem_spawner = 0
let boost_timer = 0
let player_dir_change_location: tiles.Location = null
let player_speed = 0
let player_dir = 0
let player_next_turn = 0
let police_car: Sprite = null
let player_car: Sprite = null
game.splash("NIGHT CITY ROBBER", "Steal - Evade - Escape")
player_car = sprites.create(assets.image`dsf`, SpriteKind.Player)
police_car = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
let question_mark = sprites.create(assets.image`myImage2`, SpriteKind.help)
let exit = sprites.create(assets.image`myImage3`, SpriteKind.exit)
animation.runImageAnimation(
player_car,
assets.animation`bluecar_0`,
50,
true
)
animation.runImageAnimation(
police_car,
assets.animation`bluecar_1`,
50,
true
)
tiles.setCurrentTilemap(tilemap`city`)
scene.setBackgroundColor(2)
tiles.placeOnTile(player_car, tiles.getTileLocation(6, 13))
scene.cameraFollowSprite(player_car)
tiles.placeOnTile(police_car, tiles.getTileLocation(5, 12))
tiles.placeOnTile(exit, tiles.getTileLocation(14, 4))
tiles.placeOnTile(question_mark, tiles.getTileLocation(11, 13))
player_next_turn = -1
player_dir = 0
player_speed = 2
player_dir_change_location = player_car.tilemapLocation()
boost_timer = 0
gem_spawner = 10
police_dir = 0
police_next_turn = randint(0, 3)
police_dir_change_location = police_car.tilemapLocation()
let police_speed = 1.1
invulnerable = 0
info.setScore(0)
info.setLife(3)
info.startCountdown(60)
game.onUpdate(function () {
    handleBoost(player_car)
    handleMove(player_car, player_dir, player_speed)
    handleMove(police_car, police_dir, police_speed)
    if (player_dir_change_location != player_car.tilemapLocation()) {
        collideCorners(player_car, player_dir)
        collideTsections(player_car, player_next_turn, player_dir)
        collideIntersections(player_car, player_next_turn, player_dir)
    }
    if (police_dir_change_location != police_car.tilemapLocation()) {
        collideCorners(police_car, police_dir)
        collideTsections(police_car, police_next_turn, police_dir)
        collideIntersections(police_car, police_next_turn, police_dir)
    }
    handleGems()
    handleInvulnerable()
})
