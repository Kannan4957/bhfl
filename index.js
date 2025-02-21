const express=require('express');
const app=express();
const port = process.env.PORT || 3000;

app.use(express.json());

let num=[];
let str=[];
let strhigh=[];
app.post('/bfhl',async (req,res)=>{

    const {data}=await req.body;
    if (!data || !Array.isArray(data)) {
        return res.status(400).json({
            is_success: false,
            message: "Invalid input. 'data' must be an array."
        });
    } 

    const full_name = "Kannan Naidu";
    const dob = "13082004";
    const email = "22BAI70318@cuchd.in";
    const roll_number = "22BAI70318";
    const user_id = `${full_name.replace(/\s+/g, "_").toLowerCase()}_${dob}`;
 
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => /^[A-Za-z]$/.test(item));

    // Find the highest alphabet (case-insensitive)
    const highest_alphabet = alphabets.length > 0
        ? [alphabets.reduce((max, curr) => (curr.toLowerCase() > max.toLowerCase() ? curr : max))]
        : [];

        res.json({
            is_success: true,
            user_id,
            email,
            roll_number,
            numbers,
            alphabets,
            highest_alphabet
        });
})

app.get("/bfhl", (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
