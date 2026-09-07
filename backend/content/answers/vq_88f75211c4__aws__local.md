---
qid: vq_88f75211c4__aws__local
question: What’s the most beautiful natural sight you’ve ever seen?
topic: Behavioral
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 398
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:01:50-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
During a 10‑day trek in the Annapurna Circuit, I was tasked with capturing the most “beautiful” natural scene for an environmental documentary that would be shown to over **2 M viewers worldwide** on Amazon Prime Video. My goal was to deliver a shot that not only looked stunning but also conveyed the urgency of climate change.

**Action (Dive Deep & Bias for Action)**  
I mapped the trail with GPS, plotted sunrise times, and analyzed satellite imagery to predict cloud cover. I brought an **AWS Ground Station**‑enabled drone and a lightweight 4K camera. Using **Amazon SageMaker**, I pre‑trained a scene‑recognition model on 5 M images of Himalayan landscapes to auto‑detect the most photogenic angles in real time. When the drone hovered over the Khumbu Glacier, the model flagged a “golden hour” moment; I instantly triggered the capture and streamed metadata back via **AWS IoT Core** for instant quality checks.

**Result (Deliver Results)**  
The footage—an 8K panoramic of the glacier rim at sunrise—earned a **92 % viewer rating** on Prime Video, boosted engagement by **18 %**, and was used in an Amazon Climate Action campaign that reached **4.7 M users** within a week.

**Learnings (Invent & Simplify)**  
I realized that combining on‑the‑fly AI with edge computing drastically cuts post‑processing time. Next time I’ll integrate **AWS Greengrass** to run the model offline, reducing data transfer costs by ~30 % and improving resilience in remote areas.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
