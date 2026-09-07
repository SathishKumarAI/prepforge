---
qid: ing_7bf20ff375__aws__local
question: 'Explain: Browser vs Desktop Automation — Computer Use Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 602
total_tokens: 831
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:05:37-05:00'
sources: []
---

**Situation & Task**  
At my previous company we had a SaaS product that required automated interaction with external web portals (e.g., tax filing, data scraping). The engineering team debated whether to build **browser‑based automation** (headless Chrome/Playwright) or **desktop automation** (AutoIt/Win32 APIs) for the “Computer Use Agent” that would run on customer machines. I was tasked with evaluating both approaches and recommending a production‑ready solution.

**Action – Technical Design**  
| Criterion | Browser Automation | Desktop Automation |
|-----------|--------------------|---------------------|
| **Scope** | Works across OSes, uses web APIs; can handle dynamic JS. | Limited to Windows; needs UI element coordinates. |
| **Reliability** | Headless browsers are stable, can retry on network blips. | Susceptible to screen resolution / theme changes; harder to unit‑test. |
| **Security** | Runs inside sandboxed process; minimal elevation needed. | Requires admin privileges for many actions → audit risk. |
| **AWS Services** | Deploy agents as EC2 Spot instances behind Application Load Balancer, use SQS for job queue, and CloudWatch Logs for telemetry. | Same infrastructure but heavier footprint; higher OS image size. |

I proposed a **hybrid architecture**:  
1. **Primary path** – Headless Chrome via Playwright on an Alpine‑based Docker image (≈120 MB).  
2. **Fallback** – For legacy Windows portals, use WinAppDriver only when the browser fails after two retries.

Scalability: Each job spins a short‑lived container; autoscaling is driven by SQS depth. Availability: 99.95% SLA achieved with ALB health checks and retry logic. Cost: Spot instances + ECR storage < $0.005 per minute, vs ~$0.02 for full Windows VM.

**Result**  
After deployment, we processed **15 k jobs/month**, reducing manual effort by 70% (≈$12K/month saved). The fallback path handled 2.3% of jobs with a 95% success rate. We also logged all interactions in CloudWatch, enabling audit compliance and faster incident response.

**Learning & Bar‑raiser Feedback**  
- **Ownership**: Took end‑to‑end responsibility from requirement gathering to production monitoring.  
- **Dive Deep**: Benchmarked headless vs desktop performance under load; identified trade‑offs.  
- **Quantified Impact**: Delivered a 70% reduction in manual hours and $12K/month cost savings.  
- **Learning from Failure**: Early pilot on Windows failed due to UI drift; we pivoted to browser automation, learning the importance of platform abstraction.

*Leadership Principles invoked:* **Customer Obsession**, **Ownership**, **Dive Deep**, **Deliver Results**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
