function Convert-TimeTo12Hour {
    param([string]$timeString)
    
    if ($timeString -match "time: '(\d{2}):(\d{2})-(\d{2}):(\d{2})'") {
        $startHour = [int]$matches[1]
        $startMin = $matches[2]
        $endHour = [int]$matches[3]
        $endMin = $matches[4]
        
        $startAmPm = if($startHour -ge 12) { "PM" } else { "AM" }
        $endAmPm = if($endHour -ge 12) { "PM" } else { "AM" }
        
        $startDisplay = if($startHour -eq 0) { 12 } elseif($startHour -gt 12) { $startHour - 12 } else { $startHour }
        $endDisplay = if($endHour -eq 0) { 12 } elseif($endHour -gt 12) { $endHour - 12 } else { $endHour }
        
        return "time: '$startDisplay:$startMin $startAmPm-$endDisplay:$endMin $endAmPm'"
    }
    return $timeString
}

# Process each file
$files = @('year1-data.js', 'year2-data.js', 'year3-data.js', 'year4-data.js')

foreach ($file in $files) {
    $filePath = "c:\.vscode\BATU timeable\js\$file"
    Write-Host "Processing $file..."
    
    $content = Get-Content $filePath -Raw
    $lines = Get-Content $filePath
    $newLines = @()
    
    foreach ($line in $lines) {
        if ($line -match "time: '(\d{2}):(\d{2})-(\d{2}):(\d{2})'") {
            $newLine = Convert-TimeTo12Hour $line
            $newLines += $newLine
        } else {
            $newLines += $line
        }
    }
    
    $newLines | Set-Content $filePath -Encoding UTF8
    Write-Host "Completed $file"
}

Write-Host "All files converted!"
