---
qid: ing_4ec32c8fdf__aws__local
question: 'Explain: Understand the Project Goals: — Parking Lot System Design | Notion'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 600
total_tokens: 835
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:23:28-05:00'
sources: []
---

**Situation / Task**  
I was asked to lead the architecture of a real‑time Parking Lot System that would support up to **200k concurrent users** across multiple cities, provide instant vehicle entry/exit billing, and integrate with city traffic APIs for dynamic pricing.

**Action (Design & Ownership)**  

1. **Requirements Clarification** – I ran workshops with stakeholders to nail down core flows: *Vehicle In → Slot Allocation → Payment → Vehicle Out*.  
2. **AWS Architecture** –  
   - **API Gateway + Lambda** (Python) for stateless entry/exit endpoints, auto‑scaling to 10k RPS.  
   - **Amazon DynamoDB** (global table) with a composite key (`lotId#slotNumber`) for O(1) slot lookup; provisioned throughput tuned via Auto Scaling.  
   - **AWS IoT Core** to ingest sensor data from parking gates, routing to Lambda that updates DynamoDB in real time.  
   - **Amazon SQS** as a buffer between IoT events and payment processing to ensure durability during traffic spikes.  
   - **Amazon Aurora Serverless v2** for relational billing history, giving sub‑millisecond latency while auto‑scaling down to zero during off‑hours (cost savings).  
3. **Scalability & Availability** – Multi‑AZ deployment, DynamoDB global tables across regions, and Lambda’s concurrency limits set with reserved capacity for peak hours.  
4. **Cost Optimization** – Leveraged spot instances for non‑critical batch analytics on parking patterns; used Amazon CloudWatch metrics to trigger cost alerts.  

**Result (Metrics)**  
- Reduced average entry latency from 2 s to **0.35 s** (97% improvement).  
- Achieved **99.999% uptime** over 12 months, meeting SLA for city partners.  
- Cut operational costs by **23%** through serverless and spot‑instance strategies.

---

### Leadership Principles Highlighted  

- **Ownership** – I drove the end‑to‑end design, coordinated cross‑functional teams, and held myself accountable for uptime and cost targets.  
- **Dive Deep** – I dissected sensor data pipelines, tuned DynamoDB provisioned throughput, and analyzed CloudWatch metrics to preempt capacity issues.

### What a Bar‑Raiser Listens For  

- Clear articulation of stakeholder needs → demonstrates ownership.  
- Quantified performance gains & cost savings → shows impact.  
- Deep technical choices (e.g., IoT Core vs MQTT brokers) → indicates deep dive.  
- Reflection on trade‑offs (serverless latency vs reserved capacity) → evidence of learning from failure and continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
