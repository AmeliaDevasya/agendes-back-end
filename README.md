# AGENDES API DOCUMENTATION

This document provides information on how to use the Agendes API for managing agendas, reminders, and user authentication.


## ROUTING AGENDA

### Get All Agendas
- Endpoint: `https://agendes-back-end.vercel.app/agenda`
- Method: `GET`
- Description: Retrieves all agendas.

### Add New Agenda
- Endpoint: `https://agendes-back-end.vercel.app/agenda`
- Method: `POST`
- Description: Adds a new agenda.

### Get Agenda by ID
- Endpoint: `https://agendes-back-end.vercel.app/agenda/{id}`
- Method: `GET`
- Description: Retrieves an agenda based on its ID.

### Update Agenda by ID
- Endpoint: `https://agendes-back-end.vercel.app/agenda/{id}`
- Method: `PUT`
- Description: Updates an agenda based on its ID.

### Delete Agenda by ID
- Endpoint: `https://agendes-back-end.vercel.app/agenda/{id}`
- Method: `DELETE`
- Description: Deletes an agenda based on its ID.


## ROUTING REMINDER

### Get All Reminders
- Endpoint: `https://agendes-back-end.vercel.app/reminder`
- Method: `GET`
- Description: Retrieves all reminders.

### Add New Reminder
- Endpoint: `https://agendes-back-end.vercel.app/reminder`
- Method: `POST`
- Description: Adds a new reminder.

### Get Reminder by ID
- Endpoint: `https://agendes-back-end.vercel.app/reminder/{id}`
- Method: `GET`
- Description: Retrieves a reminder based on its ID.

### Get Reminder by Email
- Endpoint: `https://agendes-back-end.vercel.app/reminder-byemail/{email}`
- Method: `GET`
- Description: Retrieves a reminder based on email user.

### Update Reminder by ID
- Endpoint: `https://agendes-back-end.vercel.app/reminder/{id}`
- Method: `PUT`
- Description: Updates a reminder based on its ID.

### Delete Reminder by ID
- Endpoint: `https://agendes-back-end.vercel.app/reminder/{id}`
- Method: `DELETE`
- Description: Deletes a reminder based on its ID.


## ROUTING RELATIONSHIP BETWEEN REMINDER AND AGENDA DESA

### Get Reminder-User Relationship
- Endpoint: `https://agendes-back-end.vercel.app/reminder-user`
- Method: `GET`
- Description: Retrieves the relationship between reminders and agenda desa.

### Post Reminder-User Relationship
- Endpoint: `https://agendes-back-end.vercel.app/reminder-user`
- Method: `POST`
- Description: Add a relationship between reminders and agenda desa.


## ROUTING LOGIN AND REGISTER

### Register Admin
- Endpoint: `https://agendes-back-end.vercel.app/auth/agendes/admin/register`
- Method: `POST`
- Description: Registers a new admin for Agendes.

## ROUTING LOGIN

### Admin Login
- Endpoint: `https://agendes-back-end.vercel.app/auth/agendes/admin/login`
- Method: `POST`
- Description: Logs in an admin to access Agendes.


