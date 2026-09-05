---
qid: ing_00236cf51a__star__local
question: 'Explain: all of those spots are full and — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 327
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:28:53-05:00'
sources: []
---

**Situation**  
When I joined a startup building an autonomous valet system, our test fleet hit a snag: the parking lot we were using for live trials was at full capacity and couldn’t accommodate new vehicles. The team needed a quick, scalable solution that would let us keep testing without buying more space.

**Task**  
I had to design a software‑driven parking management layer that could dynamically reallocate spots, predict occupancy, and integrate with the valet robot’s navigation stack—all while guaranteeing safety and minimal latency.

**Action**  
First, I modeled the lot as a graph where nodes were spots and edges were drive lanes. Using a lightweight Dijkstra implementation in Go, I computed shortest paths for each vehicle. I added a real‑time occupancy cache backed by Redis, refreshed every 200 ms from IoT sensors. For load balancing, I introduced a Markov chain estimator that predicted the next spot’s availability with 92% accuracy, allowing the robot to pre‑plan routes. Finally, I exposed a REST API so the mobile app could reserve spots and receive status updates.

**Result**  
The new system reduced average parking time by 18%, cut sensor read latency to under 50 ms, and allowed us to run parallel test batches without additional hardware. I learned that combining graph theory with probabilistic forecasting can turn a hard‑coded “full” constraint into a fluid resource that scales with traffic patterns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
