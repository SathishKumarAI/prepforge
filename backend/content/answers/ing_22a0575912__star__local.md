---
qid: ing_22a0575912__star__local
question: 'Explain: Secrets — DevOps-SRE/2_ContainerOrchestration/Kubernates/Secrets.md
  at main \u00b7 Anshul619/DevOps-SRE \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 269
output_tokens: 303
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:38:13-05:00'
sources: []
---

**Situation** – In my last role I was responsible for migrating the company’s legacy monolith into a micro‑service architecture on GKE. One of our services handled sensitive payment data, so we had to ensure that credentials were never exposed in the image or repo.  

**Task** – I needed to implement secure storage and injection of API keys, database passwords, and TLS certificates for that service while keeping deployment pipelines CI/CD friendly.

**Action** – I created a Kubernetes Secret object using `kubectl create secret generic db-creds --from-literal=username=payuser --from-literal=password=$(openssl rand -base64 32)`. Then I mounted the secret as both an environment variable (`envFrom`) and a volume (`/etc/secrets`) in the deployment spec. To avoid accidental leaks, I added an admission webhook that rejected any pod spec exposing secrets as plain text or mounting them on hostPath. Finally, I integrated the secret creation into our GitHub Actions pipeline using `kubectl apply -f` with `--kubeconfig` from a GCP service account scoped to the namespace.

**Result** – The deployment succeeded in under 10 minutes without any credential exposure; we passed an external security audit with zero findings. I learned that automating secret creation and enforcing strict admission policies dramatically reduces human error while keeping CI/CD pipelines smooth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
