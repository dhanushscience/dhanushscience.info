---
title: "First-Principles Thinking: What I Ask Before I Build"
description: How one judge's question taught me first-principles thinking,
  leading to a patent and an SIH 2025 win.
date: 2026-11-26
thumbnail:
  light: /images/blog/THUMBNAIL_BLOG-3.png
draft: false
---
> **The 30-second version**
>
> - At SIH 2024, a judge asked one question about our glaucoma-monitoring device that our design could not answer: *"Could an elderly patient actually hold it steady?"*
> - We had already spent most of the budget on parts. With four days left, I went back to the problem instead of defending the solution, and found a different approach: infrared temperature sensing with built-in distance guidance.
> - We did not win. But the judges backed the new direction, it became our final-year project and a published patent, and a year later we won SIH 2025.
> - The lesson: a clever implementation is not proof that you understood the problem. Now I start every problem from first principles: I break it down with WHYs until only the fundamentals are left, then build the solution back up. The method is at the end if you want to skip straight to it.

---

## One question I could not answer

"Wouldn't it be difficult for an elderly person to hold this device steadily?"

A judge asked this in the first round of SIH 2024, and I did not have an answer.

We were building a device to monitor intraocular pressure (IOP) in glaucoma patients, most of them elderly. Our design needed the user to hold the device in a precise position. By then, we had already bought a ₹8,000 AI camera, a Raspberry Pi and the rest of the components. A big part of the budget was gone, and I was leading a team of six.

We had spent so long thinking about the build that we completely ignored the actual users.

What if their hands shook? What if they could not hold that position at all?

## Why I walked straight into this trap

*Short version: being good at connecting ideas makes it easy to fall in love with your own solution.*

I explore technologies, and random stuff on the internet, whether or not I need them. I have a personal rule for it:

**FAFO:** *the more you **Fuck Around**, the more you **Find Out**.*

That habit pays off. When I run into a new problem, my brain pulls in something I explored months ago, and that often leads to a better solution.

Going into SIH 2024, Raspberry Pi, image processing and AI were booming, and I was excited about all of them. The traditional clinical approach captures an image of the fundus (the back of the eye) and calculates the cup-to-disc ratio to find IOP. So my plan felt obvious, capture the image using a device and let AI do the calculation locally on the Raspberry Pi.  


![image.png](/images/blog/image-1.png)

It worked, but it was a costly workaround. I never asked why it had to be done this way, or whether an elderly patient could hold the device steady.

I see the same habit in many people who are new to building things: a problem turns straight into "this sensor here, that actuator there." I thought that way too, until I changed my first question from "Which sensor do I need?" to "What is actually happening here, and why?"

Exploring was not the mistake. Reaching for a solution first was.

## Four days, one table, a new idea

*Short version: I stopped thinking about parts and went back to the original question.*

After that first round of judging, we had about four days left of SIH 2024 (HW). The team was unsure of the direction. I was confused too, and I did not want that to spread. So I asked the other five to keep moving on what they could, and I sat down at a table to start over.

I stopped asking which components to buy. Instead I asked:

- How could we estimate IOP without touching the eye?
- How could the device work for someone who cannot hold it steady?
- What other physical signals or measurement methods might help?

While reading, I came across something called the wavefront method. One image linked to it showed a gradient-like pattern that reminded me of how temperature gradients are drawn. That small observation raised a bigger question:

**Could the temperature around the eye have some relationship with intraocular pressure?**

I found a research paper that discussed a possible relationship. The evidence was thin, nowhere near enough to prove that temperature could reliably measure IOP. But it gave me a hypothesis worth testing.

I talked it through with a volunteer mentor who was helping teams. Explaining it out loud made it clear that the idea was worth pursuing, even with our time and budget limits. Sometimes a connection only makes sense once you say it to someone else.

## Building it (Breaking it)

*Short version: we built a working second device overnight, with a few mistakes along the way.*

We could not just drop the original work. The team kept developing it, I helped with its remaining stuff, and I took on the alternative device myself.

- **The sensor.** I wanted the AMG8833, an infrared sensor array, but could not get it in time. I used an MLX infrared temperature sensor instead.
- **The part that mattered most.** Capturing temperature was not enough. An elderly user might not know how far away to hold the device, so I added a second infrared sensor to check the distance before taking a reading. The original problem, finally designed in.
- **The clock.** The parts took two to three days to arrive. Then I had one night to integrate everything.
- **The mistake.** While designing the 3D-printed enclosure, I applied about 2 mm *inward* instead of outward. The sensors and battery barely fit. My friends laughed at me. Fair enough.
- **The bad luck.** The display got damaged in transport. It slowly got worse and died completely during the final showcase.

But the device worked.  


![1737601620434.jpg](/images/blog/1737601620434-1.jpg)

## We lost, but it led to a win

We did not win SIH 2024. After everything, that hurt.

But the same judges who had picked apart our first approach were impressed by how we had turned it into something more feasible. One of them told us to keep working on it, whether or not we won.

We did. It became our final-year project, and the work led to a published patent.

I walked away without the trophy, but with something more useful: I had finally experienced what it means to question the problem instead of defending the solution.

## Knowing first principles is not the same as using them

Here is the uncomfortable part. Before SIH 2024, I already knew about first-principles thinking. I had talked about it. I understood it.

Then I ignored it the moment I had an exciting idea.

That is how it goes. You get attached to what you have built, and you start looking for ways to make it work instead of asking whether it is the right thing to build at all.

Engineers have a bad habit of jumping into solutions as soon as they stumble on problems. Sometimes the best engineering decision is to stop and reconsider. That is why I now start every problem by breaking it down with WHYs.

## SIH 2025: this time, the right way

This time, I spent real effort understanding the problem statement before touching the implementation.

I also built the team differently. Instead of everything depending on me, I looked for people who could own their work mix of hardware and software skills, juniors and seniors, and people who could mentor. We had disagreements, including a few with my senior Mayur (but his suggestions turned out to be right), but we became a team that worked.

We won SIH 2025.

![1766225118267.jpg](/images/blog/1766225118267.jpg)

It was not an overnight result. It was the lesson I had failed to apply the year before, finally applied.

## First-principles thinking: how I approach a problem now

I deconstruct the problem by asking why until it cannot break down any further. Only then do I build the solution back up from what is left. Now a days I spend more time of working out problem rather than building solutions.

**First, break it down with WHYs**. I start by asking why the problem exists in the first place, and try to understand it. That gives me a few answers. Then I take each answer and ask why again: Why is it like this? Why should the solution work this way?

Each round strips away more ideas. I keep going until the problem will not break down any further. If I still cannot explain it without naming a technology, I have not dug deep enough.

**Then, build it back up.** With the fundamentals in hand, I rebuild the solution from them:

1. **Who am I solving it for?** What are their limits, and where will they use it? Something that works for an engineer in a lab can be useless to the person who actually needs it.
2. **What must it do?** What are the real requirements, and the limits on cost, time, accuracy, power, safety and usability?
3. **Which assumptions am I making?** Separate what I know from what I am guessing. Mark what needs research and what needs an experiment.
4. **What else can I connect to this?** Look outside my own field. An idea from somewhere else might change the whole approach.
5. **What is the smallest experiment that tests my riskiest assumption?** I rarely need a finished prototype to find out whether an idea is worth pursuing.

*One thing: none of this is a checklist to follow word for word. First-principles thinking is not a fixed procedure. it is a way of exploring. The questions will change from problem to problem, and so will the order in which you ask them. What stays the same is the habit underneath: do not accept a solution until you understand why the problem exists, and build only from what you know to be true.*

## Do not fall in love with what you are building. Fall for the problem.

I still explore things with no obvious use. I still get excited when two unrelated ideas click together. But I have learned not to confuse an interesting implementation with a meaningful solution.

A prototype proves that you can build something. It does not prove that you have solved the problem.

So the next time you get a problem statement, do not open your IDE, order parts or sketch a circuit straight away. Break it down with WHYs until only the fundamentals are left. Then build the solution back up from them.

And ask yourself the Trillion dollar question I now ask before every project:

**Why?**