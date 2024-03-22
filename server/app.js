const express = require('express')
const getCodes = require('./getCodes.js');
const checkTime = require('./checkTime.js');

const app = express()
const codeSuccess = getCodes('./status_codes/code-success.json')
const codeError = getCodes('./status_codes/code-error.json')

app.get('/service', (req, res) => {
    if (checkTime()){
        const codeSuccessValues = Object.values(codeSuccess.get_success) 
        const codeSuccessKeys = Object.keys(codeSuccess.get_success) 
        const randomIndex = Math.floor(Math.random() * codeSuccessValues.length);
        const codeValue = codeSuccessValues[randomIndex];
        const codeKey = codeSuccessKeys[randomIndex];
        res.status(codeKey).json({ "message": codeValue })
    } 
    else{
        const codeErrorValues = Object.values(codeError.get_error)
        const codeErrorKeys = Object.keys(codeError.get_error)
        const randomIndex = Math.floor(Math.random() * codeErrorValues.length);
        const errorCodeValue = codeErrorValues[randomIndex];
        const errorCodeKey = codeErrorKeys[randomIndex];
        res.status(errorCodeKey).json({ "error": errorCodeValue })
    }
});

app.post('/service', (req, res) => {
    if (checkTime()) {
        const codeSuccessValues = Object.values(codeSuccess.post_success)
        const codeSuccessKeys = Object.keys(codeSuccess.post_success)
        const randomIndex = Math.floor(Math.random() * codeSuccessValues.length);
        const codeValue = codeSuccessValues[randomIndex];
        const codeKey = codeSuccessKeys[randomIndex];
        res.status(codeKey).json({ "message": codeValue })
    }
    else {
        const codeErrorValues = Object.values(codeError.post_error)
        const codeErrorKeys = Object.keys(codeError.post_error)
        const randomIndex = Math.floor(Math.random() * codeErrorValues.length);
        const errorCodeValue = codeErrorValues[randomIndex];
        const errorCodeKey = codeErrorKeys[randomIndex];
        res.status(errorCodeKey).json({ "error": errorCodeValue })
    }
});

app.put('/service', (req, res) => {
    if (checkTime()) {
        const codeSuccessValues = Object.values(codeSuccess.put_success)
        const codeSuccessKeys = Object.keys(codeSuccess.put_success)
        const randomIndex = Math.floor(Math.random() * codeSuccessValues.length);
        const codeValue = codeSuccessValues[randomIndex];
        const codeKey = codeSuccessKeys[randomIndex];
        res.status(codeKey).json({ "message": codeValue })
    }
    else {
        const codeErrorValues = Object.values(codeError.put_error)
        const codeErrorKeys = Object.keys(codeError.put_error)
        const randomIndex = Math.floor(Math.random() * codeErrorValues.length);
        const errorCodeValue = codeErrorValues[randomIndex];
        const errorCodeKey = codeErrorKeys[randomIndex];
        res.status(errorCodeKey).json({ "error": errorCodeValue })
    }
});

app.delete('/service', (req, res) => {
    if (checkTime()) {
        const codeSuccessValues = Object.values(codeSuccess.delete_success)
        const codeSuccessKeys = Object.keys(codeSuccess.delete_success)
        const randomIndex = Math.floor(Math.random() * codeSuccessValues.length);
        const codeValue = codeSuccessValues[randomIndex];
        const codeKey = codeSuccessKeys[randomIndex];
        res.status(codeKey).json({ "message": codeValue })
    }
    else {
        const codeErrorValues = Object.values(codeError.delete_error)
        const codeErrorKeys = Object.keys(codeError.delete_error)
        const randomIndex = Math.floor(Math.random() * codeErrorValues.length);
        const errorCodeValue = codeErrorValues[randomIndex];
        const errorCodeKey = codeErrorKeys[randomIndex];
        res.status(errorCodeKey).json({ "error": errorCodeValue })
    }
});

app.patch('/service', (req, res) => {
    if (checkTime()) {
        const codeSuccessValues = Object.values(codeSuccess.patch_success)
        const codeSuccessKeys = Object.keys(codeSuccess.patch_success)
        const randomIndex = Math.floor(Math.random() * codeSuccessValues.length);
        const codeValue = codeSuccessValues[randomIndex];
        const codeKey = codeSuccessKeys[randomIndex];
        res.status(codeKey).json({ "message": codeValue })
    }
    else {
        const codeErrorValues = Object.values(codeError.patch_error)
        const codeErrorKeys = Object.keys(codeError.patch_error)
        const randomIndex = Math.floor(Math.random() * codeErrorValues.length);
        const errorCodeValue = codeErrorValues[randomIndex];
        const errorCodeKey = codeErrorKeys[randomIndex];
        res.status(errorCodeKey).json({ "error": errorCodeValue })
    }
});

app.options('/service', (req, res) => {
    if (checkTime()) {
        const codeSuccessValues = Object.values(codeSuccess.options_success)
        const codeSuccessKeys = Object.keys(codeSuccess.options_success)
        const randomIndex = Math.floor(Math.random() * codeSuccessValues.length);
        const codeValue = codeSuccessValues[randomIndex];
        const codeKey = codeSuccessKeys[randomIndex];
        res.status(codeKey).json({ "message": codeValue })
    }
    else {
        const codeErrorValues = Object.values(codeError.options_error)
        const codeErrorKeys = Object.keys(codeError.options_error)
        const randomIndex = Math.floor(Math.random() * codeErrorValues.length);
        const errorCodeValue = codeErrorValues[randomIndex];
        const errorCodeKey = codeErrorKeys[randomIndex];
        res.status(errorCodeKey).json({ "error": errorCodeValue })
    }
});

app.head('/service', (req, res) => {
    if (checkTime()) {
        const codeSuccessValues = Object.values(codeSuccess.head_success)
        const codeSuccessKeys = Object.keys(codeSuccess.head_success)
        const randomIndex = Math.floor(Math.random() * codeSuccessValues.length);
        const codeValue = codeSuccessValues[randomIndex];
        const codeKey = codeSuccessKeys[randomIndex];
        res.status(codeKey).json({ "message": codeValue })
    }
    else {
        const codeErrorValues = Object.values(codeError.head_error)
        const codeErrorKeys = Object.keys(codeError.head_error)
        const randomIndex = Math.floor(Math.random() * codeErrorValues.length);
        const errorCodeValue = codeErrorValues[randomIndex];
        const errorCodeKey = codeErrorKeys[randomIndex];
        res.status(errorCodeKey).json({ "error": errorCodeValue })
    }
});

app.trace('/service', (req, res) => {
    if (checkTime()) {
        const codeSuccessValues = Object.values(codeSuccess.trace_success)
        const codeSuccessKeys = Object.keys(codeSuccess.trace_success)
        const randomIndex = Math.floor(Math.random() * codeSuccessValues.length);
        const codeValue = codeSuccessValues[randomIndex];
        const codeKey = codeSuccessKeys[randomIndex];
        res.status(codeKey).json({ "message": codeValue })
    }
    else {
        const codeErrorValues = Object.values(codeError.trace_error)
        const codeErrorKeys = Object.keys(codeError.trace_error)
        const randomIndex = Math.floor(Math.random() * codeErrorValues.length);
        const errorCodeValue = codeErrorValues[randomIndex];
        const errorCodeKey = codeErrorKeys[randomIndex];
        res.status(errorCodeKey).json({ "error": errorCodeValue })
    }
});

const HOST = 'localhost'
const PORT = 5001
app.listen(PORT, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`)
    checkTime()
});