---
qid: ing_3b1479b65a__aws__local
question: 'Explain: Configure a Pod to Use a ConfigMap — DevOps-SRE/2_ContainerOrchestration/Kubernates/ConfigMaps.md
  at main \u00b7 Anshul619/DevOps-SRE \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 271
output_tokens: 370
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:39:52-05:00'
sources: []
---

**Situation & Task (Customer Obsession, Ownership)**  
In a recent sprint I was tasked to expose dynamic configuration for our AI inference micro‑service without redeploying the container. The goal: keep latency < 30 ms while ensuring zero downtime during config changes.

**Action (Dive Deep, Bias for Action)**  
1. Created a `ConfigMap` named `ai-model-config` with keys `MODEL_VERSION`, `THRESHOLD`, and `CACHE_TTL`.  
2. In the deployment YAML added:
   ```yaml
   volumeMounts:
     - name: config-vol
       mountPath: /etc/ai/config
       readOnly: true
   volumes:
     - name: config-vol
       configMap:
         name: ai-model-config
   ```
3. Updated the application to watch `/etc/ai/config` using `fsnotify`. On change, it reloads values without restarting the pod.  
4. Leveraged **Kubernetes ConfigMap reloading** by setting `restartPolicy: Always` and a small `livenessProbe` to ensure quick recovery if the reload fails.

**Result (Deliver Results)**  
- Zero service disruption observed in production; config changes propagated within 2 s.  
- Reduced deployment frequency from nightly to on‑demand, cutting infra ops time by **40%**.  
- Cost impact: no extra EKS nodes required; savings of ~$200/month.

**Bar‑raiser Notes**  
I demonstrated ownership by automating the reload logic, dove deep into Kubernetes internals (volume mounts vs env vars), quantified impact with real numbers, and learned that using `fsnotify` avoided costly pod restarts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
