---
title: Blackout Harvest
summary: A 48-hour game jam, and a lesson in decoupling with the observer pattern.
date: 2026-04-05
cover: ../../assets/projects/blackout-harvest/light-radius.png
coverAlt: Blackout Harvest gameplay, with the player standing in the only light in a dark map
tags: [Unity, C#, URP, Game jam]
role: Sole programmer
team: Team of 3
duration: 48 hours
links:
  play: https://purplebred.itch.io/blackout-harvest
  github: https://github.com/Metruzero/MicrojamLight
featured: true
---

For my second game jam, I signed up for [Micro Jam 56](https://itch.io/jam/micro-jam-056). The theme of which was "light". The mystery pre-requisite revealed at the start was "Only one light source."

For this project I actually had a team, we had three total people. One programmer (myself), one artist, and one sound/composer. We had 48 hours total from the start of the jam to submission.

## Idea Phase

We knew the theme of light ahead of time, but by surprise we got told about the "One Light Source" when the jam started.

Our artist proposed an idea before the reveal of the pre-requisite, a survival game where we "harvest light" and sell it. Expanding on the idea, we came up with a 2D top down survival game where you walk around the map collecting as much fuel as possible. In between levels you can sell this fuel to purchase upgrades.

After the theme was revealed, we found we can easily adapt this idea and just keep one light source around the player.

## Planning/Or lack there of

This is where I get into probably the first major learning I'm taking away from this project. And it was my lack of planning. Knowing I only had 48 hours to put something together, I rushed into implementation right away on the first day.

This ended up biting me quite a bit later on. As I had to rewrite large portions of the code as I added new features.

I would have benefited a lot from thinking through how upgrades would be purchased and given to the necessary components to use it's values. Overall writing some kind of design document before implementation would have saved a lot of time. Even if I only spent 1-2 hours writing up something quick, it could have saved much more time later.

## Unity and URP

One thing I wanted to do better for this jam is to find pre built packages and libraries to help save some work. Given that light was an important theme for the jam, I knew I would need to find something to handle that for me. Creating my own lighting system would only be a nightmare within such a limited time frame of 48 hours.

Some brief research brought me to the [URP (Universal Rendering Pipline)](https://docs.unity3d.com/Manual/urp/urp-introduction.html). This was immensely helpful in getting some basic lighting set up with shadows. While there is much more to learn here, my gut instinct to find a lighting library was correct in that this portion of the project was done in simply minutes instead of the horus it would have taken otherwise.

## Decoupling and Event Handling

This is something I wish I spent time designing early on in the jam. Because this is probably the "bigger" game I've worked on in regards to complexity, I ran into an issue where I had a lot of "manager objects" that all referenced each other and made this nasty ugly web.

After some reflection, I started doing research and learning much more about how to use an "[Observer pattern](https://refactoring.guru/design-patterns/observer)" and other decoupling methods such as using [scriptable objects](https://docs.unity3d.com/6000.4/Documentation/Manual/class-ScriptableObject.html).

I did use scriptable objects later on in the project for things like upgrades, but using them earlier on for things like player stats or resources for the players would have saved a significant amount of time in the long run.

## Final Thoughts

While there are a lot of things I can improve on, that's the whole reason I'm doing these at all, is to improve my skill and knowledge as a developer. I still had a lot of fun making it and I look forward to making more.
