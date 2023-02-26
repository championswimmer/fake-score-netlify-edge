import type { Context } from "https://edge.netlify.com";

export default (_request: Request, _context: Context) => {
  return new Response(JSON.stringify({
    teams: {
      home: 'IND',
      away: 'ENG'
    },
    score: {
      innings: Math.floor((Date.now() / 1000000)) % 2,
      batting: 'IND',
      bowling: 'ENG',
      runs: Math.floor((Date.now() / 10000)) % 300,
      wickets: Math.floor((Date.now() / 100000)) % 10,
      overs: Math.floor((Date.now() / 100000)) % 50,
    },
  }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    }
  });
};

export const config = {
  path: "/*"
}
