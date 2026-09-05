---
qid: ing_8868c3b106__star__local
question: 'Explain: VPC Endpoint (Interface) — Typical AWS Network Architecture'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 354
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:05:35-05:00'
sources: []
---

**Situation:**  
When I was building a real‑time fraud detection pipeline in AWS, we had a SageMaker model deployed as an HTTPS endpoint that needed to be called from a private Lambda function. The company policy forbade any traffic to exit the VPC, so we couldn’t use the public API gateway.

**Task:**  
I had to expose the SageMaker inference endpoint securely inside our VPC while keeping it isolated from the internet and ensuring low latency for the Lambda invocations.

**Action:**  
I created an Interface VPC Endpoint (AWS PrivateLink) for the SageMaker runtime service. In the VPC, I attached a dedicated subnet in each AZ, set up a security group that allowed inbound HTTPS from only the Lambda’s security group, and added a route table entry pointing to the endpoint network interface. Then I updated the Lambda function’s environment variables to use the private DNS name of the endpoint (e.g., `runtime.sagemaker.us-east-1.amazonaws.com`). Finally, I enabled VPC flow logs to monitor traffic and adjusted IAM roles so only the Lambda had permission to invoke the SageMaker endpoint.

**Result:**  
The inference latency dropped from 350 ms over the public internet to 120 ms inside the VPC. Traffic stayed entirely within our private network, meeting compliance requirements. I learned how Interface Endpoints let us keep services like SageMaker strictly internal while still using standard SDK calls, and how careful subnet/security group design is critical for performance and security.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
