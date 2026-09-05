---
qid: vq_a2d78aab5f__eli5__local
question: How to send an email in Python language?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 385
total_tokens: 541
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:22:46-05:00'
sources: []
---

Imagine your computer is a post office clerk and you want to mail a letter (an email) to someone. In Python, the clerk is a built‑in library called **smtplib** that talks to an SMTP server—the postal service for emails.

1. **Set up the message** – create the text you’ll send; think of it as writing your letter on paper.
2. **Tell the clerk where to send it** – give the recipient’s address (the “To” field) and your own address (“From”).  
3. **Pick a post office** – connect to an SMTP server, usually `smtp.gmail.com` for Gmail, using its port number (587).  
4. **Log in** – provide your username and password so the clerk knows you’re allowed to send mail.  
5. **Send it off** – call the `sendmail()` function with your message; the clerk hands the letter to the post office, which delivers it.

In code:

```python
import smtplib, ssl

smtp_server = "smtp.gmail.com"
port = 587          # TLS port
sender_email = "you@example.com"
receiver_email = "friend@example.com"
password = "your‑app‑specific‑pw"

message = """\
Subject: Hello!

This is a test email from Python.
"""

context = ssl.create_default_context()
with smtplib.SMTP(smtp_server, port) as server:
    server.starttls(context=context)   # secure the connection
    server.login(sender_email, password)
    server.sendmail(sender_email, receiver_email, message)
```

That’s all—your “letter” travels from your computer to the recipient’s inbox, just like a real post office.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
