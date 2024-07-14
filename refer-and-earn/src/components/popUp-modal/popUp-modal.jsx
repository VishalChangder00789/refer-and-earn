// src/components/ReferralModal.js
import React, { useState } from "react";
import { Modal, Box, TextField, Button, Typography } from "@mui/material";
import axios from "axios";
import { BASE_URL } from "../../url";

const ReferralModal = ({ open, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [referredBy, setReferedBy] = useState("");
  const [message, setMessages] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle form submission
    await axios.post(`${BASE_URL}/api/referrals`, {
      name,
      email,
      phone,
      referredBy,
      message,
    });
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          borderRadius: 1,
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography id="modal-title" variant="h6" component="h2">
          Refer a Course
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="Referrer's Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Referrer's Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Referee's Phone"
            value={phone}
            type="number"
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Referee's Name"
            value={referredBy}
            onChange={(e) => setReferedBy(e.target.value)}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Message"
            type="text"
            value={message}
            onChange={(e) => setMessages(e.target.value)}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default ReferralModal;
