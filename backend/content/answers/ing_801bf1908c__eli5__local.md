---
qid: ing_801bf1908c__eli5__local
question: 'Explain: NUMA Awareness and CPU Topology — Virtualization Architecture
  - by Neo Kim and Ayaan'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 230
total_tokens: 398
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:59:57-05:00'
sources: []
---

Think of a data‑center server as a large office building with many rooms (CPU cores) that share a single hallway (memory).  
In a **NUMA (Non‑Uniform Memory Access)** setup, each room has its own small pantry (local memory) and a bigger pantry in the lobby. If you work in your room, grabbing food from your pantry is fast; asking for something from another room’s pantry requires going through the hallway, which takes longer.  

**CPU topology** tells the operating system how those rooms are arranged—how many floors, how many rooms per floor, and which rooms share a common hallway.  

In virtualization, the hypervisor must be “NUMA‑aware” so it can place virtual machines (like tenants in different offices) on rooms that match their memory needs, keeping most of their data in the local pantry and avoiding slow hallway trips. This keeps the virtual office running smoothly, just as a well‑organized building lets its occupants work efficiently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
