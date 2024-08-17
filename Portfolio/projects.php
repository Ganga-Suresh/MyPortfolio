<?php
header('Content-Type: application/json');
$projects = [
    [
        "project_name" => "Colour Mixer",
        "project_thumbnail" => "/images/ColorMixer.png",
        "project_url" => "https://ganga-suresh.github.io/WorkshopsUelessWeb/MixxErr-ColorMixer/",
        "project_description" => "A webpage for obtaining the resultant color when two colors ar mixed",
        "project_languages" => "HTML, CSS, JavaScript"
    ]
];
echo json_encode($projects);
?>
