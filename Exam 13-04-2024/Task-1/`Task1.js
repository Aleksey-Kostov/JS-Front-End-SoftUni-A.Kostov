function solve(input) {
    const num = Number(input.shift())
    let heros = {}

    for (let i = 0; i < num; i++) {
        const [HeroName, hp, bullets] = input.shift().split(' ')
        heros[HeroName] = {
            hp: Number(hp),
            bullets: Number(bullets)
        }

    }

    for (let i = 0; i < input.length; i++) {

        let [command, currentName, ...args] = input[i].split(' - ')

        let currentHero = heros[currentName]

        if (command === 'FireShot') {

            let target = args
            if (currentHero.bullets === 0) {
                console.log(`${currentName} doesn't have enough bullets to shoot at ${target}!`);
            } else {
                currentHero.bullets -= 1
                console.log(`${currentName} has successfully hit ${target} and now has ${currentHero.bullets} bullets!`);
            }

        } else if (command === 'TakeHit') {
            const [damage, attacker] = args

            if (currentHero.hp > 0 && currentHero.hp <= 100 && currentHero.hp > damage) {
                currentHero.hp -= Number(damage)
                if (currentHero.hp < 0) {
                    currentHero.hp = 0
                }
                console.log(`${currentName} took a hit for ${damage} HP from ${attacker} and now has ${currentHero.hp} HP!`);
            } else {
                delete heros[currentName]
                console.log(`${currentName} was gunned down by ${attacker}!`);
            }

        } else if(command === 'Reload') {
            if (currentHero.bullets < 6) {
                let dif = 6 - currentHero.bullets
                currentHero.bullets = 6
                console.log(`${currentName} reloaded ${dif} bullets!`);
            } else {
                currentHero.bullets = 6
                console.log(`${currentName}'s pistol is fully loaded!`);
            }

        } else if (command === 'PatchUp') {
            let amount = args

            if (currentHero.hp < 100 && currentHero.hp > 0) {
                currentHero.hp += Number(amount)
                let dif = Number(amount)
                
                if (currentHero.hp > 100) {
                    dif = 100 - currentHero.hp
                    currentHero.hp = 100
                }
                console.log(`${currentName} patched up and recovered ${amount} HP!`);
            } else {
                console.log(`${currentName} is in full health!`);
            }

        }
    }

    for (const hero in heros) {
        console.log(`${hero}
HP: ${heros[hero].hp}
Bullets: ${heros[hero].bullets}`);
    }

}


solve((["2",
"Gus 100 0",
"Walt 100 6",
"FireShot - Gus - Bandit",
"TakeHit - Gus - 100 - Bandit",
"Reload - Walt",
"Ride Off Into Sunset"])
)


solve((["2",
"Jesse 100 4",
"Walt 100 5",
"FireShot - Jesse - Bandit",
 "TakeHit - Walt - 30 - Bandit",
 "PatchUp - Walt - 20" ,
 "Reload - Jesse",
 "Ride Off Into Sunset"])
)