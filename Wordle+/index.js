const http = require("http");

const hostname = '127.0.0.1';

const SECRET = "TEETH"; // You can set any word as the secret answer

function myFunction(req, res) {
	// console.log({req}); // You can uncomment this to see the request object
	console.log(req.url);

	const GUESS = req.url.split('word=')[1]; // Write logic to parse the word which the user guessed from the URL string
	console.log(GUESS)
	let feedback = ""; // Write logic to compare the word with the secret, and generate the feedback string
	function ans(W)
	{
		let L = [];
		let I = [];
		for (ch in W)
		{
			if (L.indexOf(W[ch]) == -1)
			{
				L.push(W[ch]);
				I.push(1)
			}
			else
			{
				I[L.indexOf(W[ch])]++;
			}
		}
		return [L, I];
	}
	function word(A, G)
	{
		const len = 5;
		let j = 0;
		let L = ['b', 'b', 'b', 'b', 'b'];
		let x = ans(A);
		let ch = x[0];
		let I = x[1];
		for (let k = 0; k < len; k++)
		{
			if (A[k] == G[k])
			{
				L[k] = 'g';
				I[ch.indexOf(A[k])]--;
			}
		}
		for (let i = 0; i < len; i++)
		{
			for (j = 0; j < len; j++)
			{
				// console.log(I,ch, L);
				if (G[i] == A[j])
				{
					if ((L[i] == 'b') && (I[ch.indexOf(A[j])] > 0))
					{
						L[i] = 'y';
						I[ch.indexOf(A[j])]--;
					}
				}
			}
			
		}
		feedback = L[0] + L[1] + L[2] + L[3] + L[4];
		
	}
	if (GUESS != undefined)
	{
		if (GUESS.length == 5)
		{
			word(SECRET, GUESS.toUpperCase())
			res.write(feedback);
			res.end();
		}
		else
		{
			res.write("try entering a 5 letter word");
			res.end();
		}
	}
	
}

http.createServer(myFunction).listen(8080);
