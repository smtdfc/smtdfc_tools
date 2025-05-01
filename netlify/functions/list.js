const { createClient } = require('@supabase/supabase-js');


const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

exports.handler = async (event, context) => {
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
      body: '',
    };
  }
  
  
  const params = event.queryStringParameters;
  const page = parseInt(params.page || '1', 10);
  const limit = parseInt(params.limit || '10', 10);
  const offset = (page - 1) * limit;
  
  const { data, count, error } = await supabase
    .from('tools')
    .select('*', { count: 'exact' })
    .range(offset, offset + limit - 1);
  
  if (error) {
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
      body: JSON.stringify({ error: error.message }),
    };
  }
  
  return {
    statusCode: 200,
    body: JSON.stringify({
      page,
      limit,
      total: count,
      totalPages: Math.ceil(count / limit),
      data,
    }),
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
    
  };
};