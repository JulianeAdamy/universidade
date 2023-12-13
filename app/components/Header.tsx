export default function Header() {
    return (
        <header className="text-center text-black py-8 border-b border-[#4d4d4d] md:flex itens-center justify-between">
            
            <nav>
                <a className="text-black" href="admin/university/new">
                    Cadastrar university &nbsp;
                </a>
                <a className="text-black" href="admin/university">
                Listar university &nbsp;{" "}
                </a>
                
            </nav>
        </header>
    )
}