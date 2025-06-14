{{/*
Secret Name for Redirect Database
*/}}
{{- define "app.redirect.database.secretName" }}
{{- if .Values.redirect.database.existingSecret }}
{{- .Values.redirect.database.existingSecret }}
{{- else -}}
{{- printf "%s-db-secret" .Release.Name }}
{{- end }}
{{- end }}

{{/*
Name
*/}}
{{- define "app.redirect.name" -}}
{{- if .Values.redirect.nameOverride }}
{{- .Values.redirect.nameOverride | trunc 63 | trimSuffix "-" }}
{{- else -}}
redirect
{{- end }}
{{- end }}

{{/*
Fullname
*/}}
{{- define "app.redirect.fullname" }}
{{- if .Values.redirect.fullnameOverride }}
{{- .Values.redirect.fullnameOverride | trunc 63 | trimSuffix "-" }}
{{- else }}
{{- printf "%s-redirect" .Release.Name | trunc 63 | trimSuffix "-" }}
{{- end }}
{{- end }}

{{/*
Create chart name and version as used by the chart label.
*/}}
{{- define "app.redirect.chart" -}}
{{- printf "%s-%s" .Chart.Name .Chart.Version | replace "+" "_" | trunc 63 | trimSuffix "-" }}
{{- end }}

{{/*
Common labels
*/}}
{{- define "app.redirect.labels" -}}
helm.sh/chart: {{ include "app.redirect.chart" . }}
{{ include "app.redirect.selectorLabels" . }}
app.kubernetes.io/managed-by: {{ .Release.Service }}
{{- end }}

{{/*
Selector labels
*/}}
{{- define "app.redirect.selectorLabels" -}}
app.kubernetes.io/name: {{ include "app.redirect.name" . }}
app.kubernetes.io/instance: {{ .Release.Name }}
{{- end }}

{{/*
Config map name
*/}}
{{- define "app.redirect.configMapName" }}
{{- if .Values.redirect.existingConfigMap }}
{{- .Values.redirect.existingConfigMap }}
{{- else -}}
{{ printf "%s-redirect-config" .Release.Name }}
{{- end }}
{{- end }}

{{/*
Service Account Name
*/}}
{{- define "app.redirect.serviceAccountName" }}
{{- if .Values.redirect.serviceAccount.create }}
{{- default (include "app.redirect.fullname" .) .Values.redirect.serviceAccount.name }}
{{- else }}
{{- default "default" .Values.redirect.serviceAccount.name }}
{{- end }}
{{- end }}
