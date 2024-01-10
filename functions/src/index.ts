/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import {onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import {initializeApp} from "firebase-admin/app";
import {getFirestore} from "firebase-admin/firestore";

initializeApp();

const db = getFirestore();

// Start writing functions
// https://firebase.google.com/docs/functions/typescript
export const validateToken = onRequest(
  {
    cors: false, // set true for local testing ["michaelwlodawsky.com$"],
    timeoutSeconds: 120,
  },
  async (request, response) => {
    const token = request.query.token;
    const validTokenRef = db.collection("validToken");

    // set "*" for local testing, else ["https://michaelwlodawsky.com"],
    response.header("Access-Control-Allow-Origin", "https://michaelwlodawsky.com");
    // eslint-disable-next-line
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    response.header("Access-Control-Allow-Methods", "GET");

    const tokenMatch = await validTokenRef.where("token", "==", token).get();
    if (tokenMatch.empty) {
      logger.log("INVALID token received");
      response.status(200).send(false);
    } else {
      logger.log("Valid token received");
      response.status(200).send(true);
    }
  });

exports.validateToken = validateToken;
