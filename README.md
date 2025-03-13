# Delete Old Emails (Google Apps Script)

## Overview
This Google Apps Script helps you delete old emails from your Gmail inbox in an automated way. Since Gmail does not provide an option to bulk-delete emails before a specific date, this script performs the deletion in batches of 500 emails at a time until all matching emails are removed.

## Why This Script?
If you have been using Gmail for years, you might have accumulated thousands of old emails that you no longer need. In my case, I had emails dating back to 2012, totaling around **38,000 emails**. Since Gmail does not allow selecting and deleting all emails before a specific date in one go, this script automates the process by:
- Searching for emails before a given date (January 1, 2023, in this case).
- Deleting them in batches of 500 (the maximum Gmail allows per search query execution as of **March 13, 2024**).
- Running in a loop until all targeted emails are deleted.

## Use Case
If you are struggling with an overloaded Gmail inbox and need to clean up old emails, this script will help by automating the deletion process. Instead of manually selecting and deleting emails in small batches, this script ensures that all emails matching your criteria are removed without further manual effort.

## How to Use
1. **Open Google Apps Script:**
   - Go to [Google Apps Script](https://script.google.com/).
   - Click on `New Project`.

2. **Paste the Script:**
   - Copy and paste the `deleteOldEmails` function from `delete_old_emails.gs` into the script editor.

3. **Save the Script:**
   - Click on `File > Save`.

4. **Run the Script:**
   - Click on `Run > deleteOldEmails`.
   - Authorize the script to access your Gmail.
   - The script will begin deleting emails in batches of 500.

5. **Check Logs:**
   - Open `View > Logs` to see the progress of deleted emails.

6. **Set Up Auto-Execution (Optional):**
   - Click on `Triggers` (clock icon on the left panel).
   - Set up a time-driven trigger to run `deleteOldEmails` periodically (e.g., every 10 minutes) until all old emails are deleted.

## Script Explanation
### **How the Script Works**
- The script searches for emails before the specified date using Gmail’s search query.
- It fetches up to 500 email threads per run (as per Gmail’s limit).
- It moves those emails to the Trash.
- The process repeats until no matching emails are found.
- It logs the number of deleted emails in each batch for tracking purposes.
- A delay (`Utilities.sleep(2000)`) is added to avoid exceeding Google’s execution limits.

## Gmail Search Query Options
The script uses a **query** to filter emails before deletion. You can modify the query based on your needs:

- **`before:YYYY/MM/DD`** → Find emails before a specific date.
- **`after:YYYY/MM/DD`** → Find emails after a specific date.
- **`older_than:1y`** → Emails older than 1 year.
- **`newer_than:6m`** → Emails from the last 6 months.
- **`from:example@gmail.com`** → Emails from a specific sender.
- **`subject:invoice`** → Emails with a specific subject.
- **`has:attachment`** → Emails that have attachments.

Modify the `query` variable in the script to use these filters as needed.

## Important Notes
- **Emails are moved to Trash**, where they will be permanently deleted after 30 days.
- **Batch Limit:** As of March 13, 2024, Gmail only fetches up to **500 email threads per search query**, so the script loops until all emails are processed.
- **Adjust Date:** Modify the `query` variable inside the script to change the date filter.

## License
This project is open-source under the MIT License. Feel free to modify and use it as needed!

---

If this script helped you, consider starring the repository on GitHub! ⭐

