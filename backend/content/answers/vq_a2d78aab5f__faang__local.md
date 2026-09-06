---
qid: vq_a2d78aab5f__faang__local
question: How to send an email in Python language?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 519
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:26:15-05:00'
sources: []
---

**1️⃣ Clarify**  
*Problem:* Send a simple email (SMTP) from a Python script.  
*Assumptions I’d confirm:*  
- Recipient address is known and valid.  
- SMTP server credentials (host, port, username, password) are available.  
- Plain‑text or HTML body? Here we’ll cover plain text for brevity.  

**2️⃣ Approach**  
1. Import `smtplib` and `email.message`.  
2. Build an `EmailMessage` object with subject, from, to, and payload.  
3. Connect to the SMTP server (TLS/SSL as required).  
4. Authenticate and send the message.  

**3️⃣ Depth**  
```python
import smtplib
from email.message import EmailMessage

def send_email(
    smtp_host: str,
    smtp_port: int,
    user: str,
    pwd: str,
    to_addr: str,
    subject: str,
    body: str,
) -> None:
    msg = EmailMessage()
    msg["Subject"] = subject
    msg["From"] = user
    msg["To"] = to_addr
    msg.set_content(body)

    with smtplib.SMTP(smtp_host, smtp_port) as server:
        server.starttls()          # secure the connection
        server.login(user, pwd)
        server.send_message(msg)
```
*Complexity:* O(1) time and space; network I/O dominates.  
*Trade‑offs:* Using `smtplib` is straightforward but requires manual TLS handling. Libraries like `yagmail` or services (SendGrid) abstract this and handle retries.

**4️⃣ Edge Cases**  
- Invalid recipient → `SMTPRecipientsRefused`.  
- Authentication failure → `SMTPAuthenticationError`.  
- Network timeout → catch `smtplib.SMTPException`.  
- Large attachments → switch to MIME with multipart/related.  

**5️⃣ Optimize & Communicate**  
- Wrap the send in a retry loop (exponential backoff) for transient network glitches.  
- Use environment variables or secrets manager for credentials instead of hard‑coding.  
- Log success/failure with context (e.g., message ID).  

*In an interview, I’d finish by explaining how this pattern scales: plug into CI/CD pipelines, monitor via metrics, and swap the SMTP backend for a REST API if needed.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
