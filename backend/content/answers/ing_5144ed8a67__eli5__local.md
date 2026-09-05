---
qid: ing_5144ed8a67__eli5__local
question: 'Explain: HTTP response status codes — HTTP response status codes - HTTP
  | MDN'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 275
total_tokens: 439
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:45:55-05:00'
sources: []
---

Think of an HTTP request like sending a postcard to a friend’s mailbox. The **status code** is the little stamp that shows up on the back of the postcard when it comes back.

- **2xx (Success)** – “All good, your postcard reached the right house and was read.”  
  *Example:* `200 OK` means the page was found and delivered correctly.

- **3xx (Redirection)** – “Your postcard went to a new address; follow this new mailbox.”  
  *Example:* `301 Moved Permanently` tells the browser to go to a different URL.

- **4xx (Client error)** – “There’s something wrong with your postcard—maybe it was sent to the wrong street or the recipient doesn’t exist.”  
  *Example:* `404 Not Found` means the requested page isn’t on that server.

- **5xx (Server error)** – “The mailbox is broken; the post office can’t deliver right now.”  
  *Example:* `500 Internal Server Error` signals a problem inside the web server.

So, just as stamps let you know whether your postcard reached its destination or needs rerouting, status codes inform browsers and users what happened to their request.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
