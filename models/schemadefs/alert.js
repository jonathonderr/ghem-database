/**
 * Current Alert Statuses:
 *  - Primary
 *  - Success
 *  - Warning
 *  - Danger
 */
const alert = {
  title: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now },
  status: { type: String, required: true },
};

module.exports = alert;
