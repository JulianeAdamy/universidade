import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { useSearchParams } from "next/navigation";


export const revalidate =0

export default async function Listuniversity() {
    async function deleteuniversity(formData: FormData){
        "use server"
        const id = formData.get("id") as string;
        await sql`DELETE from university where id=${id}`
        revalidatePath("/admin/university/new")
    }
    const { rows } = await sql`SELECT * from university`;
    return (
        <div>
           
            <h1 className="text-center text-black">Lista de Universidade</h1>

            <table>
                <thead>
                    <tr> <td>Name do Curso</td> <td>Telefone do Universidade</td></tr>
                </thead>
                <tbody>
                    {
                        rows.map((university) => {
                            return (
                                <tr key={university.id}><td>{university.name}</td> <td>{university.telephone}</td> 
                                <td>
                                    <form >
                                     <input type="text" hidden name="id" value={university.id}/>   
                                    <button formAction={deleteuniversity}>Excluir</button>
                                    </form>
                                
                                </td> 
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>


        </div>
    )
}