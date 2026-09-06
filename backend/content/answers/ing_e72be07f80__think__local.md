---
qid: ing_e72be07f80__think__local
question: 'Explain: Build web applications — Serverless Computing \u2013 Amazon Web
  Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 534
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:17:10-05:00'
sources: []
---

**1. Clarify the scope and assumptions**  
   - Identify what “build web applications” means: front‑end code, back‑end logic, data persistence, and deployment.  
   - Assume the user is familiar with basic ML concepts but not necessarily AWS architecture.  
   - Note that “Serverless Computing” refers to event‑driven services where you don’t manage servers (e.g., Lambda, API Gateway).

**2. Adopt a layered mental model**  
   1. **Client layer** – UI/UX delivered via static hosting or CDN.  
   2. **API gateway layer** – HTTP endpoints that trigger backend logic.  
   3. **Compute layer** – Lambda functions (or Fargate for containers) executing ML inference or preprocessing.  
   4. **Data & storage layer** – S3 for static assets, DynamoDB/ RDS for state, SageMaker endpoints for heavy models.  
   5. **Observability layer** – CloudWatch logs, X-Ray tracing, and metrics.

**3. Step‑by‑step reasoning**  
   - Start with the client: host a React/Vue app in S3 + CloudFront.  
   - Define RESTful routes in API Gateway; each route maps to a Lambda function that loads the ML model from EFS or an S3 bucket.  
   - For models too large for Lambda, expose a SageMaker endpoint and let the Lambda proxy requests.  
   - Store user data in DynamoDB; secure access via IAM roles attached to Lambda.  
   - Use CloudWatch Alarms to trigger notifications on error thresholds.  
   - Deploy everything with SAM or CDK for reproducibility.

**4. Common traps**  
   - Forgetting that Lambda has a 15‑minute execution limit – unsuitable for long training jobs.  
   - Not separating concerns: bundling UI and ML code together leads to larger deployment packages.  
   - Overlooking cost: invoking many Lambdas or keeping SageMaker endpoints warm can inflate bills.

**5. Sanity‑check & verbalize**  
   - Verify that each layer has a clear responsibility; nothing overlaps.  
   - Walk through a request flow from browser → API Gateway → Lambda → SageMaker → DynamoDB, ensuring data privacy and latency constraints are met.  
   - Explain the trade‑offs (e.g., cold starts vs. cost) to reassure the listener that the architecture balances performance with operational simplicity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
