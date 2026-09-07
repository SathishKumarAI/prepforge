---
qid: vq_60584eb692__aws__local
question: What is High Water Mark?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 447
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:53:50-05:00'
sources: []
---

**High‑Water‑Mark (HWM)** – the peak value a metric reaches during a monitoring window.

---

### **Situation**
While tuning our event‑driven analytics pipeline on AWS, we noticed sporadic back‑pressure spikes that caused downstream Lambda timeouts. The Ops team requested a way to flag “critical” peaks rather than just average load.

### **Task**
Design an automated alerting mechanism that captures the *highest* value of CPU usage per EC2 instance over a rolling 15‑minute window, and triggers a remediation workflow if it exceeds 90 % for three consecutive windows.

### **Action**
1. **Collect raw metrics** with CloudWatch Agent → `AWS/EC2` namespace, metric `CPUUtilization`.
2. **Create a custom metric** (`EC2HighWaterMark`) using CloudWatch Metric Math:  
   ```
   MAX(CPUUtilization, 15m)
   ```
3. **Set an alarm** on this metric: threshold = 90 %, evaluation period = 3 (15‑min windows).  
4. **Integrate with EventBridge** to trigger a Step Functions state machine that scales the Auto Scaling Group and sends a PagerDuty alert.
5. **Persist HWM history** in DynamoDB for trend analysis.

### **Result**
- Reduced downstream Lambda failures by **67 %** within two weeks of deployment.  
- Cut manual incident‑review time from 45 min to 5 min per event.  
- Cost impact negligible (< $1/month) due to lightweight Metric Math and DynamoDB read capacity.

---

### Leadership Principles Highlighted
- **Customer Obsession** – eliminating latency for our internal customers.  
- **Ownership & Dive Deep** – building a reusable, data‑driven monitoring solution from scratch.  

Bar‑raisers look for clear ownership (I spearheaded the whole pipeline), depth (Metric Math + DynamoDB design), quantified impact (67 % reduction), and lessons learned (initially mis‑estimated evaluation period).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
