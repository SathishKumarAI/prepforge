---
qid: vq_8bb8427afe__aws__local
question: How do you think festivals help people connect?
topic: Behavioral
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 377
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:02:30-05:00'
sources: []
---

**Situation & Task (S)**  
When I was a community organizer at a regional music festival, attendance dropped 18 % year‑over‑year because attendees felt the event was “just another concert.” My goal was to re‑engage audiences and demonstrate measurable social value.

**Action (A)**  
I applied **Customer Obsession** by conducting rapid surveys and focus groups, then used those insights to build a *“Community Connect”* program.  
- Created 12 local artist‑curated “conversation pods” (30 min) using low‑cost speaker kits on AWS IoT Greengrass so each pod could stream audio locally without central bandwidth.  
- Launched a mobile app powered by Amazon Pinpoint to send real‑time match invites, encouraging attendees with similar interests to meet in the pods.  
- Deployed an Elastic Load Balancer + Auto Scaling group for the backend API (Node.js on ECS) to support 50k concurrent users during peak hours.

**Result (R)**  
Attendance rose from 12 k to 18 k (+50 %) and social media mentions of “connection” increased by 4.3×. The average time spent in a pod grew from 5 min to 17 min, indicating deeper engagement. We reduced infrastructure costs by 27 % compared to a monolithic server model.

**Reflection (D)**  
I learned that **Dive Deep** into user data uncovers hidden friction points; scaling with AWS services lets us pivot quickly. The initiative reinforced my belief in ownership—owning both the customer experience and the underlying tech stack—and demonstrated how measurable impact drives continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
