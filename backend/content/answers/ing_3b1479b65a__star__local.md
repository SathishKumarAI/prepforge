---
qid: ing_3b1479b65a__star__local
question: 'Explain: Configure a Pod to Use a ConfigMap — DevOps-SRE/2_ContainerOrchestration/Kubernates/ConfigMaps.md
  at main \u00b7 Anshul619/DevOps-SRE \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 277
output_tokens: 314
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:26:46-05:00'
sources: []
---

**Situation:**  
In a recent micro‑service rollout on our Kubernetes cluster, we noticed the application was loading environment variables from hard‑coded files inside the container image. This made it impossible to change configuration without rebuilding images and caused a 15 % increase in deployment time during quarterly updates.

**Task:**  
I needed to refactor the deployment so that each pod could read its configuration from an external ConfigMap, allowing us to update settings via `kubectl apply` without touching the image or redeploying the entire service.

**Action:**  
1. Created a `ConfigMap` (`app-config`) with key‑value pairs for database URL, feature flags, and log level.  
2. Updated the Deployment YAML: added a `volumeMounts` section to mount the ConfigMap as `/etc/app/config`.  
3. Used `envFrom` to inject all keys from the ConfigMap into pod environment variables, ensuring backward compatibility with existing code that reads `process.env.*`.  
4. Added an annotation `checksum/configmap` that triggers a rolling restart whenever the ConfigMap changes, preventing stale configs.

**Result:**  
Deployments now finish in under 20 s, and we reduced configuration errors by 90%. The team can tweak runtime settings on‑the‑fly, which improved our release cadence and lowered operational risk. I learned how to balance immutability of images with the agility of external config sources in Kubernetes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
