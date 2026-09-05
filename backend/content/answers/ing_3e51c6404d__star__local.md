---
qid: ing_3e51c6404d__star__local
question: 'Explain: this garage id and i think we — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 393
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:33:04-05:00'
sources: []
---

**Situation:**  
At my previous company we were launching a smart city pilot in downtown Phoenix, and the city council asked us to redesign their old multi‑level parking garage so it could handle peak traffic during events while reducing energy consumption.

**Task:**  
I had to design an end‑to‑end system that would (1) predict hourly occupancy, (2) guide drivers to optimal spots using real‑time data, and (3) integrate with the city’s existing payment platform—all within a 12‑month timeline and under a $2 M budget.

**Action:**  
I started by collecting historical entry/exit logs and sensor readings from 18 cameras and RFID gates. Using Python + scikit‑learn I built a time‑series model (Prophet) that forecasted occupancy with ±5% accuracy up to 48 hours ahead. For real‑time guidance, I implemented a microservice in Go that exposed a gRPC API; it consumed the model’s predictions and ran a shortest‑path algorithm over a graph of garage lanes, dynamically updating based on live sensor feeds (MQTT). To keep costs low, I containerized services with Docker and deployed them on AWS Fargate, using Spot Instances to shave 30% off compute spend. For payments, I integrated the existing city API via OAuth2, ensuring PCI compliance.

**Result:**  
The new system cut average wait time from 4 minutes to 1.3 minutes during rush hours, and increased revenue by 18% in the first quarter after launch. The predictive model was later repurposed for other municipal facilities, saving an additional $150K annually. I learned how to blend ML forecasting with real‑time routing under tight budget constraints and the importance of designing APIs that can evolve as city infrastructure grows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
