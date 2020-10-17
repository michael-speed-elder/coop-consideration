import type { Game } from '../../types/Game';
import Tags from '../../types/Tags';

const data: Game[] = [
  {
    title: 'Vermintide 2',
    imageUrl:
      'https://cdn.cloudflare.steamstatic.com/steam/apps/552500/header.jpg?t=1599644731',
    summary:
      "Of all the games on this list, this one may be most like our beloved _Deep Rock Galactic_, with an emphasis skewed towards combat rather than objective.  Think _Left 4 Dead_ squad co-op meets medieval sword and sorcery. Melee combat is certainly more of the focus than in _L4D_, but in recalling my time playing with my brother (which was a blast), there were plenty of ranged options as well.  As with the zombie shooter, the game is played on various static maps with dynamically placed groups of enemies.\n\nI think you'll like this game if you enjoy managing swarms of enemies, growing your personal skill at a the challenge of fighting off the horde, and leveling up a hero to unlock new skills and class variants.  For example, the mage character which initially starts with an almost exclusively ranged array of abilities later levels up to a spellsword variant which uses almost exclusively melee ones.",
    pros: [
      Tags.FIRST_PERSON,
      'Hordes of enemies',
      'Good character progression',
      Tags.CHALLENGING,
      'Winning feels earned',
    ],
    cons: ['New content via paid DLC', 'Potentially repetitve'],
    storeUrl:
      'https://store.steampowered.com/app/552500/Warhammer_Vermintide_2/',
    owners: ['impirator'],
  },
  {
    title: 'Remnant: From the Ashes',
    imageUrl:
      'https://cdn.cloudflare.steamstatic.com/steam/apps/617290/header.jpg?t=1598909050',
    summary:
      "After watching a few reviews and Let's Play videos, this game seems to most resemble a mashup of _Destiny_ and _Diablo_, or possibly _Borderlands_ and _Bloodborne_.  An over-the-shoulder looter-shooter that has a few discrete map tile sets with some procedurally-generated chunks and randomized pods of opponents throughout.\n\nThe \"main story\" is essentially the game's tutorial (still ten or twenty hours of content), and the longevity would come from replaying Acts (to borrow _Diablo_'s parlance) which now have randomized bosses drawn from a large pool.  You play to gear up your character as well as to unlock skills from a broad tree.  The gunplay loop seems to be pretty fun and to me reminiscent of _Destiny_/_Borderlands_, while the defensive side takes its cue from _Bloodborne_ with a dodge-only mentality.  It's challenging enough to earn the game a \"Gun Souls\" reputation.  Melee-centric builds are possible, but take some work.\n\nIt's worth noting that some reviews take issue with an ungenerous drop rate of loot, which seems odd given the genre this game wants to belong to.",
    pros: [
      Tags.THIRD_PERSON,
      'Guns. Lots of guns.',
      Tags.CHALLENGING,
      'Dodge city',
    ],
    cons: ['Potentially repetitive', 'No crossplay', 'Parsimonious loot'],
    storeUrl:
      'https://store.steampowered.com/app/617290/Remnant_From_the_Ashes/',
  },
  {
    title: 'Castle Crashers',
    imageUrl:
      'https://cdn.cloudflare.steamstatic.com/steam/apps/204360/header.jpg?t=1600880882',
    summary:
      "Head back to the halcyon days of being dropped off at an arcade, turning $20 into tokens, and tokens into hours of fun.  _Castle Crashers_ is an arcade-cabinet style side-scroller that takes you back to _Bart's Nightmare_ or _Teenage Mutant Ninja Turtles: Turtles in Time_.  It's got a cartoonish art style and sense of humor, and is great for the casual couch co-op feel at a safe social distance.",
    pros: [Tags.NOSTALGIA, Tags.ARCADE_CABINET, Tags.OVERWHELMINGLY_POSITIVE],
    cons: ['Limited replay value'],
    storeUrl: 'https://store.steampowered.com/app/204360/Castle_Crashers/',
    owners: ['impirator', 'alomo'],
  },
  {
    title: 'Gauntlet',
    imageUrl:
      'https://cdn.cloudflare.steamstatic.com/steam/apps/258970/header.jpg?t=1568335399',
    summary:
      'Relive the ridiculous mayhem of button mashing through droves of enemies in this face-lifted revival of the top-down arcade-cabinet classic.',
    pros: [
      Tags.NOSTALGIA,
      Tags.ARCADE_CABINET,
      Tags.TOP_DOWN,
      'Hordes of enemies',
      'Yellow wizard needs food badly',
    ],
    cons: ['Limited replay value'],
    storeUrl:
      'https://store.steampowered.com/app/258970/Gauntlet_Slayer_Edition/',
  },
  {
    title: 'Magicka 2',
    imageUrl:
      'https://cdn.cloudflare.steamstatic.com/steam/apps/238370/header.jpg?t=1589873056',
    summary:
      "A precursor to the top-down sci-fi shooter _Helldivers_, _Magicka_ offers a fantasy co-op experience with a unique premise:  All your wizard's powers are available at the start, but the player actually has discover how to cast them.  This is accomplished by putting together quintuples of the four classic elements.  For example, `FIRE FIRE FIRE FIRE WIND` might create a moving wall of flame—or it might do nothing at all.  By attempting and remembering combinations of elements, the players grow their powers and overcome the various environments and enemies staged by the game.",
    pros: ['Intellectually stimulating', 'Controller-friendly', Tags.TOP_DOWN],
    cons: ['Thanks for the math homework', 'Might accidentally summon a demon'],
    storeUrl: 'https://store.steampowered.com/app/238370/Magicka_2/',
    owners: ['impirator', 'tonnant', 'alomo'],
  },
  {
    title: 'Helldivers',
    imageUrl:
      'https://cdn.cloudflare.steamstatic.com/steam/apps/394510/header.jpg?t=1573763451',
    summary:
      '*On PS4 sale ($5) through Nov. 3*\n\nSpread democracy to alien planets whether they like it or not!  _Helldivers_ is kind of the _sci-fi_ version of _Magicka_, with frantically-input sequences of arrows result in orbital drops rather than spellcasting.  Steer a hardened space marine around the surface of an alien planet with one stick while aiming with the other to complete objectives or cover your squadmates.',
    pros: [
      'Teamwork required',
      Tags.SCI_FI,
      Tags.TOP_DOWN,
      Tags.CHALLENGING,
      'Controller-friendly',
    ],
    cons: [
      'No crossplay',
      'Quite frenetic at higher difficulties',
      'Tonnant will definitely shoot you',
    ],
    storeUrl:
      'https://store.steampowered.com/app/394510/HELLDIVERS_Dive_Harder_Edition/',
    owners: ['impirator', 'alomo'],
  },
  {
    title: 'Halo (co-op campaign or multiplayer)',
    imageUrl:
      'https://cdn.cloudflare.steamstatic.com/steam/apps/976730/header.jpg?t=1600795638',
    summary:
      "It's Halo.  You don't need this spelled out, right?  We pick one of the games in the Master Chief collection and have a go.",
    pros: [Tags.NOSTALGIA, Tags.PVP, Tags.FIRST_PERSON],
    cons: ['12-year-old prodigies who banged our moms'],
    storeUrl:
      'https://store.steampowered.com/app/976730/Halo_The_Master_Chief_Collection/',
    owners: ['impirator', 'alomo'],
  },
  {
    title: 'Diablo 3',
    imageUrl: 'https://s15.postimg.cc/56etnrrh7/DIABLO3_Banner_September13.png',
    // 'https://i2.wp.com/ulvespill.net/wp-content/uploads/2018/11/Diablo-3-Nintendo-Switch-release-1039798-1.jpg?fit=460%2C215&ssl=1',
    // 'https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/999/UP0002-CUSA00242_00-D3ETERNALCOLL000/1602721264000/image?w=480&h=480&bg_color=000000&opacity=100&_version=00_09_000',
    summary:
      "*On PS4 sale ($20) until Nov. 3*\n\nI'm assuming we're all familiar with the isomorphic, hack-n-slash, ARPG that is _Diablo_, so I won't go into details.  Blizzard really re-implemented Diablo 3 for consoles, and I've found it to be an awesome revival.  Controlling the character and casting abilities with a gamepad feels much more natural and intuitive.  The main issue here is that I don't think we all have the same consoles, but I could be convinced to go back to it on PC.",
    pros: [
      'Loot for days',
      'Difficulty optional',
      'Satisfying power curve',
      'Hordes of enemies',
      Tags.TOP_DOWN,
    ],
    cons: ['No crossplay', 'Braindead storyline'],
    storeUrl:
      'https://store.playstation.com/en-us/product/UP0002-CUSA00242_00-D3ETERNALCOLL000',
    owners: ['impirator'],
  },
  {
    title: 'Sea of Thieves',
    imageUrl:
      'https://cdn.cloudflare.steamstatic.com/steam/apps/1172620/header.jpg?t=1596057038',
    summary:
      "*On Microsoft sale ($20) until Oct. 19*\n\nI'll admit, I was skeptical investigating this for the list.  Like everyone, I had heard launch horror stories of shallow content and a griefing playerbase.  But that was years ago, and apparently in the interim between that release and me forgetting about it entirely, Microsoft (Rare) continued to improve this self-spun nautical narrative.\n\nAs soon as you log in to _Sea of Thieves_, depending on the number of salt-crusted companions you're adventuring with, you'll be given a ship sized for you and your mates.  There's a tutorial, but apparently the rest of the game is up to you.  Explore a cove, see what's on that island over there, battle another ship or the kraken—it's all up to you.\n\nThis is possible from go because there are no character abilities acquired over time.  Everyone playing has the same abilities as everyone else.  Obviously, a veteran crew will know how the game works, have more practiced coordination, and be more familiar with the sea-scape, but this even-playing-field approach to an MMO is unique in my mind.\n\nTo me, that changes the focus from progression to exploration, which is a very tempting prospect; some of my fondest game memories come from discovering a hidden area of Azeroth or Skyrim.  It also means that someone who joins later or needs to skip a week has only to catch up on sea shanties and tall tales.\n\nThat's not to say there's no tangible progress at all—cosmetics and reputation with various pirate guilds seem to be the mainstays there—but I can understand how that might feel a bit lackluster.  Still, the idea of finding a treasure map, charting a course, and outsmarting the booby traps to loot and plunder sounds enchanting. Arr.\n\nTwo notes about purchasing the game.  Although the game _does not_ require a paid subscription, it is one of the games available through Microsoft's new-ish Game Pass gaming service (which is a few dollars a month).  This means we could give the game a try pretty inexpensively.  Also, this game happens to be on *50% sale* through the Microsoft store right now, so if you just wanted the get outright, it would only set you back about $20 (until Oct. 20).",
    pros: [
      'MMO',
      'Piracy',
      'Sailing',
      'Immersive atmosphere',
      'Crossplay',
      Tags.PVP,
      Tags.FIRST_PERSON,
    ],
    cons: ['MMO', 'Little character progression'],
    videos: [
      'https://www.youtube.com/watch?v=av_u32HHcNc',
      'https://youtu.be/CoUYXkQSrS0',
    ],
    storeUrl:
      'https://www.microsoft.com/en-us/p/sea-of-thieves/9p2n57mc619k?activetab=pivot:overviewtab',
  },
  {
    title: 'Warframe',
    imageUrl:
      'https://cdn.cloudflare.steamstatic.com/steam/apps/230410/header.jpg?t=1601568920',
    summary:
      "I don't really know how to describe this game.\n\nIt seems like a free, high-quality, over-the-shoulder, shooty-stabby, PvE...thing.  It's a _Borderlands_ that's taking itself more seriously.  There is just tons and tons of progression possible in this game, by which I mean skills to level up and gear to acquire.  I recommend watching the shorter [five-minute review video][0] linked to get a better sense and see some gameplay clips, or to go more in depth with the [ten-minute, deliciously dry endorsement][1] from Sir Swag.\n\nAs a free game, there will be frequent encounters with things designed to entice you to spend actual money.  For example, constructing some gear seems to be gated behind long \"construction times\"—reminiscent of offline skill progression in _EVE Online_—on the order of days, which can of course be accelerated with Platinum (the premium currency).  That can be irritating, but it can also be ignored.\n\nAlmost every review I've read says the initial _Warframe_ experience is a bit overwhelming for newcomers, but things will start to make sense over time.  I've been curious to try this for a while, and I wonder if now's the right time.",
    pros: [
      'Lots of progression',
      'Free',
      Tags.THIRD_PERSON,
      Tags.SCI_FI,
      Tags.PVP,
      'Attentive developer',
      'Incredible value for price',
    ],
    cons: [
      'Lots to learn',
      'Grindy',
      'Few signposts for new players',
      'No crossplay',
    ],
    videos: [
      'https://youtu.be/8BeJ5uvkEMU',
      'https://www.youtube.com/watch?v=kzDshpzx79A',
    ],
    storeUrl: 'https://store.steampowered.com/app/230410/Warframe/',
    owners: ['impirator', 'tonnant', 'alomo'],
  },
  {
    title: 'Shotgun Farmers',
    imageUrl:
      'https://cdn.cloudflare.steamstatic.com/steam/apps/604240/header.jpg?t=1601044657',
    summary:
      "*On Steam sale ($8) until Oct. 19*\n\nI can't remember who said they were in the mood for some kind of shooter, but this is the game that came to mind.\n\nYou're playing a normal, cartoony shooter, where the guns are all farm vegetables, and a simple premise: Missed shots grow new guns.  This is in fact the only way to get new ammo as I understand it.  I'm not sure if each missed shot has a random chance of growing into a specific new gun, or if there's a way for me to more strategically _farm_ for my precious sniper rifle.\n\nI'll admit that even this description didn't really entice me, but the low price tag and rave reviews made me reconsider.  Check some of the videos out on their steam page.",
    pros: [
      Tags.OVERWHELMINGLY_POSITIVE,
      'Lighthearted, but still engaging',
      'Crossplay',
      Tags.FIRST_PERSON,
      Tags.PVP,
      'Controller support',
    ],
    cons: ['Too silly?', Tags.NO_PVE],
    storeUrl: 'https://store.steampowered.com/app/604240/Shotgun_Farmers/',
  },
  {
    title: 'Orcs Must Die 2',
    imageUrl:
      'https://cdn.cloudflare.steamstatic.com/steam/apps/201790/header.jpg?t=1599675813',
    summary:
      "We all have this game, so I'm sure we all have some memories of this Tower Defense title played from the perspective of a soldier on the ground, able to affect the course of combat by placing turrets or directly engaging the enemy hordes.",
    pros: [
      'Tower defense',
      Tags.THIRD_PERSON,
      'Controller support',
      "I don't think Tonnant can hurt his teammates",
    ],
    cons: [],
    storeUrl: 'https://store.steampowered.com/app/201790/Orcs_Must_Die_2/',
    owners: ['impirator', 'tonnant', 'alomo'],
  },
  {
    title: 'Hell Let Loose',
    imageUrl:
      'https://cdn.cloudflare.steamstatic.com/steam/apps/686810/header.jpg?t=1601369506',
    summary:
      "I'll just say up front that this is a bit of a stretch to add to the list, chiefly because it is still an Early Access title on Steam.  I know everyone's temperature on that may vary, and that's totally fair.\n\n_Hell Let Loose_ is a class-based multiplayer game that permits up to 100 players in a match.  I don't know if that's a requirement, how populated games are on average, or if different maps have different player count ranges, but that capacity isn't a draw for me in and of itself.  I'm intrigued by the idea of participating in a match that is more life scale, but the real attractor for me is the similarity with _Company of Heroes_ (a benchmark WW2 RTS).\n\nThis game seems to feature many of the classes you'd expect in a WW2-era shooter, and also some flavors of Commander classes that trade firepower for abilities.  Winning a map seems based around holding control, munitions, and fuel points.  The longer a side holds a point, the more their team accrues currencies which can be spent on airstrikes, tank support, and more.  If the comparison to _CoH_ holds, this is also the means by which the enemy's Victory Point total is slowly ticked down to zero, securing a victory—although it is also likely that there are casualty limits as well.\n\nIf WW2 shooters appeal, this might be worth spending more time looking into, but there may be one or two drawbacks worth mentioning.  First, it's still in Early Access, which is probably a safe proxy for a less-than-finished game experience.  Obviously, games make it to a full release all the time with a less-than-finished experience, but with a $30 price tag, I can appreciate that it might sting a bit more when the rough edges make an appearance.  On the other hand, it's worth remembering that _Factorio_ was technically in Early Access until a few months ago, so there's no hard and fast rule for fun.  The other issue is the realism.  I have no problem jumping into a shooter that depicts a real-life experience, but I can certainly understand how this may not be for everyone, and I acknowledge that there are plenty of other games on this list that allow for more escapism.",
    pros: [
      'World War II',
      'Large team sizes',
      Tags.PVP,
      Tags.FIRST_PERSON,
      'If Company of Heroes were a FPS',
    ],
    cons: ['Early Access', 'Maybe too real', Tags.NO_PVE],
    storeUrl: 'https://store.steampowered.com/app/686810/Hell_Let_Loose/',
  },
  {
    title: 'Star Trek: Bridge Crew',
    imageUrl:
      'https://cdn.cloudflare.steamstatic.com/steam/apps/527100/header.jpg?t=1524671484',
    summary:
      "I really can't believe we're not all playing this right now, but okay.\n\nLook, you feel like you're on the bridge of a starship.  They have a TOS and TNG version.  Did I mention the part where you feel like you're on the bridge of a starship?\n\nEach players assumes one of four roles—Captain, Helm, Engineer, or Tactical—and has controls unique to that role.  The story missions are predefined sequences of events, similar to _Star Fox_ minus the rail aspect.  Yes, you can fly out of the mission area, but I never found it to be an issue.  I can't totally remember, but I think they also might have procedurally-generated missions as well.\n\nThis isn't the game we'd end up playing to the exclusion of everything else for all time, but man would this be an incredible evening every now and again.",
    pros: [
      '✨ Star Trek 🚀',
      Tags.SCI_FI,
      Tags.FIRST_PERSON,
      'Immersive atmosphere',
      'VR/non-VR crossplay',
      'But really, you should VR if you can',
    ],
    cons: ['Limited replay value', 'No platform crossplay'],
    storeUrl:
      'https://store.steampowered.com/app/527100/Star_Trek_Bridge_Crew/',
    owners: ['impirator'],
  },
  {
    title: 'Among Us',
    imageUrl:
      'https://cdn.cloudflare.steamstatic.com/steam/apps/945360/header.jpg?t=1598556351',
    summary:
      "It's a cartoonish game of deception where almost everyone runs around a spaceship or installation trying to complete menial tasks to return the futuristic hardware to normal operation, and one or two people try to kill everyone else in secret.  People make accusations, people get voted off, and it's time for another game in ten minutes.\n\nAlthough player elimination in deception games doesn't always sound like fun times, in the case of _Among Us_, even the eliminated players can continue working on their tasks—they just become muted in the group chat (and are made visible only to the other ghosts).\n\nJust watch some of the playthroughs below to get a sense.  You're gonna love it.  Only thing is, we should probably try to recruit more people (five feels like a viable minimum) or else get comfortable playing in public games.",
    pros: [
      Tags.OVERWHELMINGLY_POSITIVE,
      'Bargain bin',
      'Crossplay',
      Tags.SCI_FI,
      'Deception',
      Tags.PVP,
    ],
    cons: [
      'Less exciting with fewer folks',
      'Alomo looking kinda sus',
      Tags.NO_PVE,
    ],
    videos: [
      'https://youtu.be/p49w78iy0_0',
      'https://youtu.be/WdY6gC8MEV4?t=14',
    ],
    storeUrl: 'https://store.steampowered.com/app/945360/Among_Us/',
  },
  {
    title: "No Man's Sky",
    imageUrl:
      'https://cdn.cloudflare.steamstatic.com/steam/apps/275850/header.jpg?t=1602779406',
    summary:
      "Alomo should really try to pitch this one.\n\n_No Man's Sky_ has come a long, long way from its initial release.  They've made good on a lot of their initial promises (albeit in a better-late-than-never style), and have exceeded expectations in many respects.  When people think of _NMS_, I imagine they are still thinking of a game where you hop from planet to planet scanning endless variations of the same thing, periodically topping off your O<sub>2</sub>, or your ship's fuel, or whatever.  Yeah, you get to be the first person to see all of it, but who cares?\n\nI think the best way to reconcile the old and the new is to just think of modern _NMS_ as a totally different game.  You can build ships and mechs.  You can play with friends without having to voyage to the center of the universe first.  You can still discover things, and there are now more rewarding experiences to encounter.  You can amass fortunes by finding and plundering resource rich worlds that only you know about.  You build your own base on your own fucking planet.  You can fly in a fighter or captain the carrier it came from.  You can visit alien stars or underwater depths.  There's even a guided main story.\n\nThis is the game we all wished it was back at launch.  I really encourage you to give the [video review][0] a try to get a more rich overview.\n\n*Post script:* _No Man's Sky_ also seems to be part of the Microsoft Game Pass, which again I would look at as a way to cheaply demo the entire game.",
    pros: [
      'VR/non-VR crossplay',
      Tags.SCI_FI,
      'Base building',
      'Crafting',
      'Shipwright',
      Tags.PVP,
      Tags.FIRST_PERSON,
      'All expansions free',
      'Attentive developer',
    ],
    cons: ['Some survival aspects', 'Might have to admit you like it'],
    videos: ['https://youtu.be/TMH3D1kz-HM'],
    storeUrl: 'https://store.steampowered.com/app/275850/No_Mans_Sky/',
    owners: ['impirator', 'alomo'],
  },
];

export default data;
