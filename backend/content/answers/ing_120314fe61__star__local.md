---
qid: ing_120314fe61__star__local
question: 'Explain: Configure the Logging Levels — GitHub - Anshul619/SpringBoot:
  About This repo contains java \"how to to-dos\", concepts in Spring Boot \u00b7
  GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 266
output_tokens: 333
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:04:31-05:00'
sources: []
---

**Situation:**  
During a sprint for our microservice that aggregates payment data, the production logs were flooded with debug statements from an external SDK, making it impossible to spot real errors in the 10 k requests per minute traffic.

**Task:**  
I had to reduce noise while preserving critical audit information and ensure the service stayed compliant with ISO/IEC 27001 logging requirements.

**Action:**  
I started by inspecting `application.yml`. I added a dedicated logger for the SDK:  

```yaml
logging:
  level:
    root: WARN
    com.external.sdk: INFO   # keep only warnings, errors, and important info
    com.myapp.payment: DEBUG  # granular debug inside our module
```

Then I leveraged Spring Boot’s `LoggingSystem` programmatically to switch the payment logger to TRACE when a test request contained a specific header (`X-Trace:true`).  
To guarantee consistency across containers, I pushed the updated config to our ConfigMap in Kubernetes and used a rolling update so no downtime occurred. Finally, I wrote an integration test that hit 20 k requests, verifying only ~2 % of logs were debug-level from the SDK.

**Result:**  
Log volume dropped by 87%, CPU usage fell by 15%, and the team could identify transaction failures in under 30 seconds. I also documented a reusable logging pattern for future services, speeding up onboarding by 40%.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
