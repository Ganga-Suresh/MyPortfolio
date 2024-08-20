<?php
header('Content-Type: application/json');
$projects = [
    [
        "project_name" => "Colour Mixer",
        "project_thumbnail" => "/images/ColorMixer.png",
        "project_url" => "https://ganga-suresh.github.io/WorkshopsUelessWeb/MixxErr-ColorMixer/",
        "project_description" => "A webpage for obtaining the resultant color when two colors ar mixed",
        "project_languages" => "HTML, CSS, JavaScript",
        "category"=> "Web Development"
    ],

    [
        "project_name"=> "My Bookshelf",
        "project_thumbnail"=> "/images/mybookshelf.png",
        "project_url"=> "https://ganga-suresh.github.io/PetProject/petprojctn01663649.html",
        "project_description"=> "A webpage for Creating and maintaining TBR list.",
        "project_languages"=> "HTML, CSS, JavaScript",
        "category"=> "Web Development"
    ],
    [   "project_name"=> "Duff Bakers",
        "project_thumbnail"=> "/images/nws.jpg",
        "project_url"=> "https://www.behance.net/gallery/205915703/Branding-Design-Duff-Bakers",
        "project_description"=> "Mock Project for Branding Design. Designing the brand identity from scratch.",
        "project_languages"=> "Adobe Illustrator, Adobe Photoshop",
        "category"=> "Design"
    ],
    [
        "project_name"=> "Johnsher Green",
        "project_thumbnail"=> "/images/Jgreen.jpg",
        "project_url"=> "https://www.behance.net/gallery/144232673/Johnsher-Green",
        "project_description"=> "Mock Project for Logo Design. Iclused Logo and Mockups",
        "project_languages"=> "Adobe Illustrator, Adobe Photoshop",
        "category"=> "Design"
    ],
    [
        "project_name"=> "Digital Illustrations",
        "project_thumbnail"=> "/images/digiillustrations.png",
        "project_url"=> "https://www.behance.net/gallery/141716407/Digital-Illustrations",
        "project_description"=> "Portrait Illustrations made usinf Adobe Illusttator",
        "project_languages"=> "Adobe Illustrator",
        "category"=> "Design"
    ]

];
echo json_encode($projects);
?>
