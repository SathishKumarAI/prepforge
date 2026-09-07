---
qid: vq_d06a5ae583__aws__local
question: Do you prefer online shopping or shopping in stores? Why?
topic: Behavioral
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 522
total_tokens: 753
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:15:21-05:00'
sources: []
---

**S – Situation**

In 2023 I was leading a cross‑functional project to launch an “Omni‑Channel Loyalty” program for a mid‑size retailer that had been struggling with cart abandonment and low in‑store footfall. The business needed to understand how customers preferred to shop so we could optimize incentives and inventory allocation.

**T – Task**

My goal was to quantify the relative value of online versus in‑store shopping for our target demographic, and then recommend a balanced strategy that would increase overall sales by at least 12% within six months.

**A – Action**

I designed a two‑phase experiment:

1. **Data‑driven Survey & Analytics**  
   *Distributed a survey to 15 000 customers (80% response rate).*  
   *Integrated Google Analytics, Salesforce CRM, and in‑store POS data.*  

2. **Controlled Incentive Test**  
   *Randomly assigned 3 000 customers to receive either a “10 % online discount” or a “free in‑store gift card.”*  
   *Tracked conversion, average order value (AOV), and repeat purchase rate over 90 days.*

Using Python & SQL I calculated that **online shoppers accounted for 57% of revenue** but had a higher abandonment rate (35% vs. 18% in-store). The incentive test showed a **15% lift in online conversions** when offering the discount, whereas the gift card increased in‑store footfall by 22% and AOV by 9%.

**R – Result**

Based on these findings I recommended a hybrid strategy:  
- **Online:** Targeted discounts for cart abandonment with automated email triggers (AWS SES + Lambda).  
- **In‑Store:** “Shop & Save” gift cards distributed via the mobile app (Amazon Pinpoint) and promoted through localized push notifications.

Within three months of rollout, overall sales rose by **13.4%**, online conversion improved by 12%, and in‑store AOV increased by 8%. The ROI on the incentive spend was 3:1.

**Leadership Principles Highlighted**

- **Customer Obsession:** I put customer preferences at the core of every metric.  
- **Dive Deep & Deliver Results:** Rigorous data analysis led to a clear, measurable outcome that exceeded the target KPI.

This experience taught me the importance of blending quantitative insight with actionable strategy—an approach I bring to every AWS‑related project.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
