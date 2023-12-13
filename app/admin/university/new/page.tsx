import { sql } from "@vercel/postgres";
import { useSearchParams } from "next/navigation";


export const revalidate = 0

export default function Newuniversity(){ 
  


  async function saveuniversity(formData: FormData){
    "use server"
    const name = formData.get("name") as string;
    const telephone = formData.get("telephone") as string;
    console.log("name, telephone")

    await sql`INSERT INTO university (name, telephone) VALUES(${name}, ${ telephone})`
    console.log("Acessou função")


  }
  return (
    <div>
      
      <h1 className="text-black text-center text-4xl">Cadastrar universidade</h1>
      <form>
        <input type="text" name="name" placeholder="Nome do Universidade" /><br /><br />
        <input type="text" name="telephone" placeholder="Telefone do Universidade" /> <br /><br />
        <button formAction={saveuniversity} className="text-black">Salvar</button>
        <br />
      </form>
    </div>

  )
}