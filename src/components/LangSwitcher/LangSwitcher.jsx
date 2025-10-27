export default function LangSwitcher ({lang, onSelect}) {

    const handleChange = (event) => {
        onSelect(event.target.value)
    }

    return (
        <div>
            <span>Select Lenguage</span>
            <select value={lang} onChange={handleChange}>
              <option value = "uk">Uk</option>
              <option value = "en">En</option>
              <option value = "pl">Pl</option>
            </select>
        </div>
    )
}