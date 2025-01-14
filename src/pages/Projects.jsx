import { Box } from "./utiles/Box.jsx";
import { ProjectsData } from "./assets/Data.js";


function ProjectsPage() {
    return (
        <>
            <h2>Current Projects in Development</h2>
            
            <div className="divCards" style={{ display: "flex", flexDirection: "column" }}>
            {/* Here are my projects */}
            {
                ProjectsData.map((project, index) => {
                return (
                    <a href={project.link} key={index} style={{ display: "flex", flexDirection: "row" }}>
                    <Box title={project.title} image={project.image} />
                    <div>
                    <h3>
                        {project.content}
                    </h3>
                    <div className="divlistE">
                        <p>
                        {
                            project.listExamples.map((example, index) => {
                            return (
                                <a href={example.linkE} key={index} 
                                    style={{ display: "flex", flexDirection: "row", color: "#fff", justifyContent: "center" }}>
                                {example.titleE}
                                </a>
                            )
                            })
                        }
                        </p>
                    </div>
                    </div>
                    </a>
                )
                })
            }
            </div>
        </>
    )
}

export default ProjectsPage