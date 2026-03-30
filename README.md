# OpenOffice Document Builder (Node.js)

Generate `.odt` documents from templates with placeholders using Node.js. Testable via **Postman**.

## Features

- Replace placeholders like `{{customer_name}}`, `{{date}}`, `{{description}}`.
- Works with OpenOffice `.odt` templates.
- Generate documents via a REST API.

## Setup

1. Clone repository and install dependencies:

```bash
git clone <repo-url>
cd <repo-folder>
npm install
```

2. Prepare folders:

templates/report.odt<br>
output/

3. Template placeholders example:

Customer: {{customer_name}}
Date: {{date}}
Description:
{{description}}

## Run Server

```bash
node server.js
```

## Document via Postman

* Method: POST
* URL: http://localhost:3000/generate
* Headers: Content-Type: application/json
* Body (raw JSON):

```json
{
  "customer_name": "Broccoli Analytics",
  "date": "2026-03-30",
  "description": "Broccoli is good."
}
```
