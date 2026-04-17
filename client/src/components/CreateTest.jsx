import axios from "axios";

export default function CreateTest() {

    const handleCreateAdmin = async () => {
        try {
            const res = await axios.post(
                "http://localhost:5000/api/admin/create-test-admin"
            );
            alert(res.data);
        } catch (err) {
            alert("Error creating admin");
        }
    };

    return (
        <div>
            <button onClick={handleCreateAdmin}>
                Create Test Admin
            </button>
        </div>
    );
}