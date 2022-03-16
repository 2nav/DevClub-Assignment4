const http = require("http");

const hostname = '127.0.0.1';

const SECRET = "CIGAR"; // You can set any word as the secret answer

function myFunction(req, res) {
	// console.log({req}); // You can uncomment this to see the request object
	console.log(req.url);

	const GUESS = req.url.split('q=')[1]; // Write logic to parse the word which the user guessed from the URL string
	console.log(GUESS)
	let feedback = ""; // Write logic to compare the word with the secret, and generate the feedback string

	function word(A, G)
	{
		const len = 5;
		let j = 0;
		for (let i = 0; i < len; i++)
		{
			let found = false
			for (j = i; j < len; j++)
			{
				if (G[i] == A[j])
				{
					found = true;
					break;
				}
			}
			if (found)
			{
				if (i == j)
					feedback += 'g';
				else
					feedback += 'y';
			}
			else
				feedback += 'b';
		}
	}
	if (GUESS != undefined)
	{
		if (GUESS.length == 5)
		{
			word(SECRET, GUESS)
			res.write(feedback);
			res.end();
		}
		else
		{
			alert('Try Again')
		}
	}
	
}

http.createServer(myFunction).listen(8080);
