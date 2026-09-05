---
qid: ing_70a892193a__eli5__local
question: 'Explain: Intervals (5 Problems) — Neetcode 150'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 359
total_tokens: 520
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:35:07-05:00'
sources: []
---

Think of every interval as a **time‑slot on a school timetable**.  
You’re given many slots, each with a start and finish time, and you must decide how to pack them so that no two overlap—just like fitting classes into rooms without clashes.

The five “interval” problems in Neetcode 150 all ask for the same kind of packing but with different twists:

1. **Meeting Rooms I** – *How many rooms are needed at once?*  
   Count how many slots overlap at any moment, just as you’d count how many classrooms are occupied simultaneously.

2. **Meeting Rooms II** – *Schedule all meetings using the fewest rooms.*  
   Assign each slot to a room that becomes free earliest; it’s like giving each class the first available classroom after the previous one ends.

3. **Minimum Meeting Rooms** – *Same as II but phrased differently.*  

4. **Merge Intervals** – *If two slots touch or overlap, combine them into one longer slot.*  
   Imagine merging back‑to‑back classes into a single extended lecture.

5. **Insert Interval** – *Add a new slot and merge if necessary.*  
   Place a new class into the timetable; if it overlaps existing ones, merge them to keep a clean schedule.

In all cases you sort by start times, then walk through the list, keeping track of ends (or rooms) just like you’d manage classroom availability. This keeps the logic simple and the solution efficient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
