export function RepositoryItem(props) {
    return(
        <li>
            <strong>{props.repository.name ?? 'Padrão'}</strong>
            <p>{props.repository.description}</p>

            <a href={props.repository.link}>
                Acessar reposit
            </a>
        </li>
    );
}