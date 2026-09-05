---
qid: ing_963518cde3__star__local
question: 'Explain: Connect to the Internet - Internet Gateway (IGW)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 348
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:33:10-05:00'
sources: []
---

**Situation** – When I was building a distributed image‑classification pipeline on AWS, the EC2 instances that ran the TensorFlow jobs were stuck inside a private subnet; they could fetch data from S3 but couldn’t pull updates for the latest model artifacts or send training logs to CloudWatch.  

**Task** – I had to give those compute nodes outbound internet access while keeping them isolated from public traffic, and ensure secure logging of all ML job metrics.  

**Action** – I added an Internet Gateway (IGW) to the VPC, then attached a route table that pointed 0.0.0.0/0 through the IGW for the private subnet’s NAT instance. The NAT instance was placed in a public subnet with its own Elastic IP, so all egress traffic was routed securely via the NAT. I also configured Security Group rules to allow only outbound HTTPS (443) and inbound CloudWatch logs from the NAT’s source IP. Finally, I updated the Terraform scripts to tag the IGW for cost allocation and enabled VPC Flow Logs to monitor traffic patterns.  

**Result** – Within 30 minutes of deployment, the training jobs could download new model weights and stream metrics to CloudWatch. Overall job throughput increased by ~25 % because we avoided manual S3 syncs, and we reduced data transfer costs by 15 % thanks to controlled NAT routing. I learned that a well‑planned IGW/NAT setup is essential for balancing isolation with the bandwidth needs of ML workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
