import mongoose from 'mongoose';

// Definir o schema para o usuário
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
}, { timestamps: true });

// Criar o modelo baseado no schema
const User = mongoose.model('User', userSchema);

export default User;
