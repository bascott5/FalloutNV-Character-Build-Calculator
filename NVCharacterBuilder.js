//global variables
//checks if content from DLCs are available
let dead_money = false;
let honest_hearts = false;
let old_world_blues = false;
let lonesome_road = false;

//arrays for all traits and perks
const default_traits = [built_to_destroy = false, fast_shot = false, four_eyes = false, good_natured = false, heavy_handed = false, kamikaze = false, loose_cannon = false, small_frame = false, trigger_discipline = false, wild_wasteland = false];
const default_perks = [black_widow = false, lady_killer = false, cherchez_la_femme = false, confirmed_bachelor = false, friend_of_the_night = false, heave_ho = false, hunter = false, intense_training = false, rapid_reload = false, retention = false, swift_learner = false, cannibal = false, comprehension = false, educated = false, entomologist = false, rad_child = false, run_n_gun = false, travel_light = false, bloody_mess = false, demolition_expert = false, ferocious_loyalty = false, fortune_finder = false, gunslinger = false, hand_loader = false, lead_belly = false, shotgun_surgeon = false, the_professional = false, toughness = false, vigilant_recycler = false, commando = false, cowboy = false, living_anatomy = false, pack_rat = false, quick_draw = false, rad_resistance = false, scrounger = false, stonewall = false, strong_back = false, super_slam = false, terrifying_presence = false, here_and_now = false, animal_friend = false, finesse = false, math_wrath = false, miss_fortune = false, mister_sandman = false, mysterious_stranger = false, nerd_rage = false, night_person = false, plasma_spaz = false, fast_metabolism = false, ghastly_scavenger = false, hit_the_deck = false, life_giver = false, long_haul = false, piercing_strike = false, pyromaniac = false, robotics_expert = false, silent_running = false, sniper = false, splash_damage = false, unstoppable_force = false, adamantium_skeleton = false, center_of_mass = false, chemist = false, jury_rigging = false, light_step  = false, purifier = false, action_boy = false, action_girl = false, better_criticals = false, chem_resistant = false, meltdown = false, tag = false, weapon_handling = false, computer_whiz = false, concentrated_fire = false, infiltrator = false, paralyzing_palm = false, explorer = false, grim_reapers_sprint = false, ninja = false, solar_powered = false, laser_commander = false, nuka_chemist = false, spray_and_pray = false, slayer = false, nerves_of_steel = false, rad_absorption = false];

//effects of all traits and perks
built_to_destroy ? Stats.Critical_Chance += 3 : false;
fast_shot
if (four_eyes == true && Equipment.Headgear == 'Glasses'){
    SPECIAL.Perception += 2;
} /*else{
    SPECIAL.Perception -= 1;
}*/
if (good_natured == true){
    Skills.Barter += 5;
    Skills.Medicine += 5;
    Skills.Repair += 5;
    Skills.Science += 5;
    Skills.Speech += 5;
    Skills.Energy_Weapons -= 5;
    Skills.Explosives -= 5;
    Skills.Guns -= 5;
    Skills.Melee_Weapons -= 5;
    Skills.Unarmed -= 5;
}
heavy_handed
if (kamikaze == true){
    Stats.Action_Points += 10;
    Stats.Damage_Threshold -= 2;
}
loose_cannon
if (small_frame == true){
    SPECIAL.Agility += 1
    //TODO cripple more easily
}
trigger_discipline

//Objects holding the statistics of the character
let SPECIAL = {
    Strength: 5,
    Perception: 5,
    Endurance: 5,
    Charisma: 5,
    Intelligence: 5,
    Agility: 5,
    Luck: 5
}

let Skills = {
    Barter: 3 + (2 * SPECIAL.Charisma),
    Energy_Weapons: 3 + (2 * SPECIAL.Perception),
    Explosives: 3 + (2 * SPECIAL.Perception),
    Guns: 3 + (2 * SPECIAL.Agility),
    Lockpick: 3 + (2 * SPECIAL.Perception),
    Medicine: 3 + (2 * SPECIAL.Intelligence),
    Melee_Weapons: 3 + (2 * SPECIAL.Strength),
    Repair: 3 + (2 * SPECIAL.Intelligence),
    Science: 3 + (2 * SPECIAL.Intelligence),
    Sneak: 3 + (2 * SPECIAL.Agility),
    Speech: 3 + (2 * SPECIAL.Charisma),
    Survival: 3 + (2 * SPECIAL.Endurance),
    Unarmed: 3 + (2 * SPECIAL.Endurance)
}

let Equipment = {
    Weapon: 'None',
    Headgear: 'None',
    Clothes: 'None'
}

let Stats = {
    Action_Points: 65 + (3 * SPECIAL.Agility),
    Carry_Weight: 150 + (10 * SPECIAL.Strength),
    Critical_Chance: SPECIAL.Luck,
    Damage_Resistance: 0,
    Damage_Threshold: 0,
    Hit_Points: 100 + (20 * SPECIAL.Endurance),
    Melee_Damage: 0 + (0.5 * SPECIAL.Strength),
    Rad_Resistance: 2 * SPECIAL.Endurance,
    Skill_Rate: Math.round(10 + (0.5 * SPECIAL.Intelligence)),
    Unarmed_Damage: Math.round((10 + SPECIAL.Endurance) / 20) //why isn't this calculating correctly when I make endurance == 10?
}

//character identity
//TODO redefine as a class?
let character = {
    name: '',
    lvl: 1,
    SPECIAL: SPECIAL,
    Skills: Skills,
    Stats: Stats,
    Equipment: Equipment
}

//functions
function raise_lower_SPECIAL(special){
    let points = 5;
    let increase = null;
    if (increase == true){
        points -= 1;
        special += 1
    } 
    else if (increase == false){
        points += 1;
        special -= 1;
    }

    if (points == 0){
        points = 0
        special += 0
    }
}

//allows 3 skills to be selected to get a starting bonus of +15
function tagged(skill){
    let tag_count = 3;
    skill += 15;
    tag_count -= 1;
    if (tag_count == 0){
        tag_count = 0
        skill += 0
    }
}

function activate_deactivate_perk(perk){
    if (perk == true){
        perk = false;
    } else if (perk == false){
        perk = true;
    }
}

function equipment(weapon, headwear, clothes){
    if (weapon == 'Knife'){
        
    }

    if (headwear == 'Glasses'){
        
    }

    if (clothes == 'Vault Jumpsuit'){
        Stats.Damage_Resistance += 1;
        Skills.Melee_Weapons += 2;
        Skills.Speech += 2;
    }
}

console.log(Stats.Skill_Rate);