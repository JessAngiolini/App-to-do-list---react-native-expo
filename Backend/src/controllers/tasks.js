import { connect } from '../api/database';

export const getTasks = async (req, res) => {
  try {
    const connection = await connect();  // Conecta a la base de datos
    const [rows] = await connection.query('SELECT * FROM tasks');  // Realiza la consulta
    console.log(rows);
    res.json(rows);  // Envía la respuesta con los datos
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener las tareas');
  }
};



export const getTask = async(req,res) => {

    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM tasks WHERE id = ?', [
      req.params.id,
    ]);
    res.json(rows[0]);
}
 
    

export const getTaskCount = async (req,res) => {
    const connection = await connect();
    const [rows]= await connection.query('SELECT COUNT(*) FROM tasks ')
    console.log(rows)
    res.json(rows[0]["COUNT(*)"])
    
}

export const saveTask = async(req,res) => {
    const connection = await connect();
    const [results] = await connection.query('INSERT INTO tasks(title, description) VALUES (?,?)',[
      req.body.title,
      req.body.description
    ])
    res.json({
      id: results.insertId,
      ...req.body,
    })
};
export const deleteTask = async(req,res) => {
    const connection = await connect();
    await connection.query('DELETE FROM tasks WHERE id = ?', [
      req.params.id
    ]);
  
  res.sendStatus(204);
   
}

export const updateTask = async (req,res) => {
    const connection = await connect();
    await connection.query("UPDATE tasks SET ? WHERE id = ?",[
      req.body,
      req.params.id
    ])
    res.sendStatus(204);
}


