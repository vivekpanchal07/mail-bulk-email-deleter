function deleteOldEmails() {
  // Modify the query to change the date range as per your requirement
  // Example: "before:YYYY/MM/DD" will find emails before the specified date
  // Example: "after:YYYY/MM/DD" will find emails after the specified date
  // Additional filters:
  // - "older_than:1y" (Emails older than 1 year)
  // - "newer_than:6m" (Emails from the last 6 months)
  // - "from:example@gmail.com" (Emails from a specific sender)
  // - "subject:invoice" (Emails with a specific subject)
  // - "has:attachment" (Emails that have attachments)
  var query = "before:2023/01/01";
  var batchSize = 500; // Maximum number of threads Gmail allows per query
  var totalDeleted = 0;

  while (true) {
    // Search for email threads that match the query
    var threads = GmailApp.search(query, 0, batchSize);
    
    // If no threads are found, stop the process
    if (threads.length === 0) {
      Logger.log("No more emails to delete.");
      break;
    }
    
    // Move found email threads to Trash
    GmailApp.moveThreadsToTrash(threads);
    totalDeleted += threads.length;
    Logger.log("Deleted " + threads.length + " emails. Total deleted: " + totalDeleted);
    
    // Pause to avoid exceeding Google's execution quota limits
    Utilities.sleep(2000);
  }
  
  Logger.log("Finished deleting emails. Total emails deleted: " + totalDeleted);
}
